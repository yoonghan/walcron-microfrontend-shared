import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Announcement from ".";
import { describe, it, expect } from "vitest";

describe("Announcement", () => {
  const announcements = ["announcement 1", "announcement 2", "announcement 3"];

  const renderAnnouncement = () =>
    render(
      <Announcement
        ariaAnnouncementTitle={"Announcement Title"}
        announcements={announcements}
        classes="ext_class"
      />
    );

  it("should be aria friendly and classes is extended", () => {
    const { getByRole } = renderAnnouncement();
    expect(
      getByRole("status", { name: "Announcement Title" })
    ).toBeInTheDocument();
    expect(getByRole("status", { name: "Announcement Title" })).toHaveClass(
      "ext_class"
    );
  });

  it("should render first component only", () => {
    const { getByText, queryByText } = renderAnnouncement();
    expect(getByText("announcement 1")).toBeInTheDocument();
    expect(queryByText("announcement 2")).not.toBeInTheDocument();
  });

  it("should render second component if click next", async () => {
    const { getByText, getByRole } = renderAnnouncement();
    await userEvent.click(getByRole("button", { name: "next announcement" }));
    expect(getByText("announcement 2")).toBeInTheDocument();
  });

  it("should render first component if click next on last element", async () => {
    const { getByText, getByRole } = renderAnnouncement();
    for (let cnt = 0; cnt < announcements.length; cnt++) {
      await userEvent.click(getByRole("button", { name: "next announcement" }));
    }
    expect(getByText("announcement 1")).toBeInTheDocument();
  });

  it("should render last component if click previous", async () => {
    const { getByText, getByRole } = renderAnnouncement();
    await userEvent.click(
      getByRole("button", { name: "previous announcement" })
    );
    expect(getByText("announcement 3")).toBeInTheDocument();
  });

  it("should render second component if click previous is clicked twice", async () => {
    const { getByText, getByRole } = renderAnnouncement();
    await userEvent.click(
      getByRole("button", { name: "previous announcement" })
    );
    await userEvent.click(
      getByRole("button", { name: "previous announcement" })
    );
    expect(getByText("announcement 2")).toBeInTheDocument();
  });

  it("should have a label name for close", () => {
    const { getByLabelText } = renderAnnouncement();
    expect(getByLabelText("Close Announcement")).toBeInTheDocument();
  });

  describe("no announcement", () => {
    const renderEmptyAnnouncements = () =>
      render(<Announcement announcements={[]} ariaAnnouncementTitle={""} />);

    it("should not have navigation buttons", async () => {
      const { queryByRole } = renderEmptyAnnouncements();
      expect(
        queryByRole("button", { name: "next announcement" })
      ).not.toBeInTheDocument();
      expect(
        queryByRole("button", { name: "previous announcement" })
      ).not.toBeInTheDocument();
    });
  });

  describe("one announcement", () => {
    const renderEmptyAnnouncements = () =>
      render(
        <Announcement
          announcements={[<strong>One Announcement</strong>]}
          ariaAnnouncementTitle={""}
        />
      );

    it("should not have navigation buttons and can render html node", async () => {
      const { queryByRole, getByText } = renderEmptyAnnouncements();
      expect(
        queryByRole("button", { name: "next announcement" })
      ).not.toBeInTheDocument();
      expect(
        queryByRole("button", { name: "previous announcement" })
      ).not.toBeInTheDocument();
      expect(getByText("One Announcement").parentElement).toHaveClass(
        "only-one"
      );
      expect(getByText("One Announcement").tagName).toBe("STRONG");
    });
  });
});
