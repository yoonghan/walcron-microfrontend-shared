import { describe, it, expect, vi } from "vitest";
import { act, fireEvent, render } from "@testing-library/react";
import "../../__mocks__/intersectionObserver";
import {
  observe,
  disconnect,
  intersectionFn,
} from "../../__mocks__/intersectionObserver";
import MiniMenu, { MiniMenuItems } from ".";
import userEvent from "@testing-library/user-event";

describe("MiniMenu", () => {
  const model: MiniMenuItems[] = [
    { hashId: "about-us", title: "About Us" },
    { hashId: "five-pillars", title: "Five Pillars" },
  ]

  const renderComponent = () =>
    render(
      <MiniMenu
        model={model}
      />
    );

  it("should render model with hash", () => {
    const { getByRole } = renderComponent();
    expect(getByRole("link", { name: "About Us" })).toHaveAttribute(
      "href",
      "#about-us"
    );
    expect(getByRole("link", { name: "Five Pillars" })).toHaveAttribute(
      "href",
      "#five-pillars"
    );
  });

  it("should have a divider and the first one divider is followed by an anchor", () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole("separator")).toHaveLength(1);
    expect(getAllByRole("separator")[0].previousElementSibling?.tagName).toBe(
      "A"
    );
  });

  describe("sticky menu", () => {
    const renderComponentWithContainer = (scrollMonitorFn = vi.fn()) =>
      render(
        <>
          <div id="long-list">Observed Long List</div>
          <div>
            <MiniMenu
              model={[{ hashId: "long-list", title: "Long List" }]}
              onScrollMonitor={scrollMonitorFn}
            />
          </div>
        </>
      );

    it("should add sticky check on load", () => {
      expect(observe).not.toHaveBeenCalled();
      const scrollMonitorFn = vi.fn();
      renderComponentWithContainer(scrollMonitorFn);
      expect(scrollMonitorFn).toHaveBeenCalledTimes(1);
      expect(observe).toHaveBeenCalledTimes(1);
    });

    it("should add sticky class when scrolled over a distance", () => {
      const { getByRole } = renderComponentWithContainer();
      const navigation = getByRole("navigation");
      Element.prototype.getBoundingClientRect = vi.fn(
        () => new DOMRect(0, 0, 0, 0)
      );
      expect(navigation.classList.contains("sticky")).toBeFalsy();

      window.scrollTo(0, 10);
      fireEvent.scroll(window, {});
      expect(getByRole("navigation")).toHaveClass("sticky");
    });

    it("should remove sticky when class scrolls down then up", () => {
      const { getByRole } = renderComponentWithContainer();
      Element.prototype.getBoundingClientRect = vi.fn(
        () => new DOMRect(0, 0, 0, 0)
      );
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(getByRole("navigation")).toHaveClass("sticky");
      window.scrollTo(0, -1);
      fireEvent.scroll(window, {});
      expect(getByRole("navigation").classList.contains("sticky")).toBeFalsy();
    });

    it("unmount should not throw exception", () => {
      const scrollMonitorFn = vi.fn();
      Element.prototype.getBoundingClientRect = vi.fn(
        () => new DOMRect(0, 0, 0, 0)
      );
      const { unmount } = renderComponentWithContainer(scrollMonitorFn);
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(scrollMonitorFn).toHaveBeenCalledTimes(2);
      unmount();
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(scrollMonitorFn).toHaveBeenCalledTimes(2);
    });
  });

  describe("link click", () => {
    it("should underline menu on selected index", async () => {
      const { getByRole } = renderComponent();
      const fivePillarsElem = getByRole("link", { name: "Five Pillars" });
      await userEvent.click(fivePillarsElem);

      expect(fivePillarsElem).toHaveClass("italic underline");
    });

    it("should call scrollToView to horizontally scroll to itself and italize it", async () => {
      const { getByRole } = renderComponent();
      const fivePillarsElem = getByRole("link", { name: "Five Pillars" });
      const scrollIntoViewCall = vi
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .spyOn(fivePillarsElem as any, "scrollIntoViewIfNeeded")
        .mockImplementation(() => {
          /* do nothing */
        });

      act(() => {
        intersectionFn([
          {
            target: { id: "five-pillars" },
            isIntersecting: true,
            boundingClientRect: {
              top: 0,
              left: 0,
            },
          },
        ]);
      });

      expect(fivePillarsElem).toHaveClass("italic underline");

      expect(scrollIntoViewCall).toHaveBeenCalledWith(true);

      scrollIntoViewCall.mockReset();
    });

    it("should default to 0 if hash is not valid", async () => {
      const { getByRole } = renderComponent();

      act(() => {
        intersectionFn([
          {
            target: { id: "not-valid" },
            isIntersecting: true,
            boundingClientRect: {
              top: 0,
              left: 0,
            },
          },
        ]);
      });

      //first gets italized
      expect(getByRole("link", { name: "About Us" })).toHaveClass(
        "italic underline"
      );
    });

    it("should disconnect when unmount", () => {
      const { unmount } = renderComponent();
      unmount();
      expect(disconnect).toHaveBeenCalledTimes(4);
    });
  });

  describe("mount different size", () => {
    const renderComponentWithSizedContainer = () =>
      render(
        <>
          <a id="short-list">Observed Short List</a>
          <div id="long-list">Observed Long List</div>
          <div>
            <MiniMenu
              model={[
                { hashId: "short-list", title: "Short List" },
                { hashId: "long-list", title: "Long List" },
              ]}
            />
          </div>
        </>
      );

    it("should observe 2 different size", () => {
      const windowHeight = 1000;
      Object.defineProperty(HTMLSpanElement.prototype, "clientHeight", {
        configurable: true,
        value: windowHeight - 100,
      });
      Object.defineProperty(HTMLDivElement.prototype, "clientHeight", {
        configurable: true,
        value: windowHeight,
      });
      Object.defineProperty(window, "innerHeight", {
        configurable: true,
        value: windowHeight,
      });
      renderComponentWithSizedContainer();
      expect(observe).toHaveBeenCalledWith(
        document.getElementById("short-list"),
        [1]
      );
      expect(observe).toHaveBeenCalledWith(
        document.getElementById("long-list"),
        [0.3]
      );
    });
  });
});
