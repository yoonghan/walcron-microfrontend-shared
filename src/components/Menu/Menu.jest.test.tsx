import { render } from "@testing-library/react";
import Menu from ".";
import { ReactNode } from "react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("Menu", () => {
  const MenuLink = (
    text: string,
    href: string,
    role: "menuitem",
    onClick?: () => void
  ) => (
    <a
      href={href}
      role={role}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {text}
    </a>
  );
  const HomeLink = (
    text: string,
    href: string,
    onClick: () => void,
    tabIndex: number
  ) => (
    <a
      href={href}
      tabIndex={tabIndex}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </a>
  );

  const HomeLogoLink = (helperClassName: string) => (
    <a
      href={"/"}
      className={helperClassName}
      onClick={(e) => e.preventDefault()}
    >
      <img src="img" alt="home link"></img>
    </a>
  );

  const renderMenuWithItems = (
    isDesktop = false,
    shortcutComponent?: ReactNode
  ) =>
    render(
      <Menu
        menuLink={MenuLink}
        homeLink={HomeLink}
        homeLogoLink={HomeLogoLink}
        model={[
          {
            label: "Zoo Negara",
            url: "/about-us",
            items: [
              {
                label: "About Us",
              },
              {
                label: "Zoo Negara Logo",
                url: "#logo",
              },
            ],
          },
          {
            label: "News",
            url: "/sample-us",
          },
        ]}
        mobileHomeText="Zoo Negara Malaysia"
        shortcutComponent={shortcutComponent}
        mobileStyle={!isDesktop ? { display: "block" } : { display: "none" }}
        desktopStyle={isDesktop ? { display: "block" } : { display: "none" }}
      />
    );

  it("should will display mobile home text that links to home", () => {
    const { getByRole, getByText, getByLabelText } = renderMenuWithItems();
    expect(getByRole("link", { name: "Zoo Negara Malaysia" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(getByText("Hamburger Menu")).toHaveClass("hamb-hidden");
    expect(getByLabelText("Main Menu")).toBeInTheDocument();

    expect(getByRole("menuitem", { name: "Zoo Negara" })).toBeVisible();
    expect(getByRole("radio", { name: "Zoo Negara" })).toBeVisible();
    expect(getByRole("menuitem", { name: "About Us" })).toBeVisible();
    expect(getByRole("menuitem", { name: "Zoo Negara Logo" })).toBeVisible();
  });

  it("should display menu correctly for desktop", () => {
    const { getByRole } = renderMenuWithItems(true);
    expect(getByRole("link", { name: "home link" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(getByRole("menuitem", { name: "Zoo Negara" })).toBeVisible();
    expect(getByRole("menuitem", { name: "About Us" })).toBeVisible();
    expect(getByRole("menuitem", { name: "Zoo Negara Logo" })).toBeVisible();
  });

  it("should be memozied and forever not modified. It's a menu!", async () => {
    const { rerender, getByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara Malaysia")).toBeVisible();
    rerender(
      <Menu
        menuLink={() => <></>}
        model={[]}
        mobileHomeText="Not Memoized"
        homeLink={() => <></>}
        homeLogoLink={() => <></>}
      />
    );
    expect(getByText("Zoo Negara Malaysia")).toBeVisible();
  });

  it("should replace submenu with main menu's root if url of submenu is missing", async () => {
    const { getByRole } = renderMenuWithItems(true);
    const expectedRootUrl = "/about-us";
    expect(getByRole("menuitem", { name: "Zoo Negara" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
    expect(getByRole("menuitem", { name: "About Us" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
  });

  it("should replace submenu url with # with topMenu", async () => {
    const { getByRole } = renderMenuWithItems(true);
    expect(getByRole("menuitem", { name: "Zoo Negara Logo" })).toHaveAttribute(
      "href",
      "/about-us#logo"
    );
  });

  it("should not have link for mobile view, and click checks the radio", async () => {
    const { getByRole } = renderMenuWithItems(false);

    expect(getByRole("menuitem", { name: "Zoo Negara" })).not.toHaveAttribute(
      "href"
    );

    expect(getByRole("radio", { name: "Zoo Negara" })).not.toBeChecked();
    await userEvent.click(getByRole("menuitem", { name: "Zoo Negara" }));
    expect(getByRole("radio", { name: "Zoo Negara" })).toBeChecked();

    expect(getByRole("menuitem", { name: "News" })).toHaveAttribute("href");
  });

  it("should render shortcut components for mobile if exist", () => {
    const { getByRole } = renderMenuWithItems(
      false,
      <button>I am a shortcut button</button>
    );
    expect(
      getByRole("button", { name: "I am a shortcut button" })
    ).toBeInTheDocument();
  });

  it("should render shortcut components for desktop if exist", () => {
    const { getByRole } = renderMenuWithItems(
      false,
      <button>I am a shortcut button</button>
    );
    expect(
      getByRole("button", { name: "I am a shortcut button" })
    ).toBeInTheDocument();
  });

  describe("Hiding side menu in mobile", () => {
    const renderMenuItemAndGetCheckBox = () => {
      const { getByRole } = renderMenuWithItems();
      return {
        sideMenuCheckBox: getByRole("checkbox", { name: "Main Menu" }),
        getByRole,
      };
    };

    const assertIsSideMenuUncheck = (element: Element) => {
      expect(element).not.toBeChecked();
      expect(document.body.style.overflow).toBe("auto");
    };

    it("should uncheck the checkbox of side menu, as mobile have cache to stay on page while render new page", async () => {
      const { sideMenuCheckBox, getByRole } = renderMenuItemAndGetCheckBox();

      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "News" }));
      assertIsSideMenuUncheck(sideMenuCheckBox);

      //retry
      await userEvent.click(getByRole("menuitem", { name: "News" }));
      assertIsSideMenuUncheck(sideMenuCheckBox);
    });

    it("should not uncheck if the clicks are on links that are parent with child", async () => {
      const { sideMenuCheckBox, getByRole } = renderMenuItemAndGetCheckBox();
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "Zoo Negara" }));
      expect(sideMenuCheckBox).toBeChecked();
    });

    it("should uncheck if the clicks are on child", async () => {
      const { getByRole, sideMenuCheckBox } = renderMenuItemAndGetCheckBox();
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "About Us" }));
      expect(sideMenuCheckBox).not.toBeChecked();

      //retry
      await userEvent.click(getByRole("menuitem", { name: "About Us" }));
      expect(sideMenuCheckBox).not.toBeChecked();
    });

    it("should set body disable from scrolling if checked", async () => {
      const { sideMenuCheckBox } = renderMenuItemAndGetCheckBox();

      //check
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();
      expect(document.body.style.overflow).toBe("hidden");

      //uncheck
      await userEvent.click(sideMenuCheckBox);
      assertIsSideMenuUncheck(sideMenuCheckBox);
    });
  });
});
