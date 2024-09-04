import { render, screen } from "@testing-library/react";
import Menu from ".";
import { ReactNode } from "react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("Menu", () => {
  const MenuLink = (text: string, href: string, onClick?: () => void) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {text}
    </a>
  );
  const HomeLink = (href: string, onClick: () => void, tabIndex: number) => (
    <a
      href={href}
      tabIndex={tabIndex}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {"Zoo Negara Malaysia"}
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
        shortcutComponent={shortcutComponent}
        mobileStyle={!isDesktop ? { display: "block" } : { display: "none" }}
        desktopStyle={isDesktop ? { display: "block" } : { display: "none" }}
        desktopClassName="desktop-class"
        mobileClassName="mobile-class"
      />
    );

  it("should will display mobile home text that links to home", () => {
    const { getByRole, getByText, getByLabelText } = renderMenuWithItems();

    expect(getByRole("menubar").parentElement).toHaveClass("mobile-class");

    expect(getByRole("link", { name: "Zoo Negara Malaysia" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(getByText("Hamburger Menu")).toHaveClass("hamb-hidden");
    expect(getByLabelText("Main Menu")).toBeInTheDocument();

    expect(getByRole("radio", { name: "Expand Zoo Negara" })).toBeVisible();
    expect(getByRole("menuitem", { name: "About Us" })).toBeVisible();
    expect(getByRole("menuitem", { name: "Zoo Negara Logo" })).toBeVisible();
  });

  it("should display menu correctly for desktop", () => {
    const { getByRole } = renderMenuWithItems(true);

    expect(getByRole("menubar").parentElement).toHaveClass("desktop-class");

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
        homeLink={() => <>Not Memomzied</>}
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

    expect(
      getByRole("radio", { name: "Expand Zoo Negara" })
    ).not.toHaveAttribute("href");

    expect(getByRole("radio", { name: "Expand Zoo Negara" })).not.toBeChecked();
    await userEvent.click(getByRole("radio", { name: "Expand Zoo Negara" }));
    expect(getByRole("radio", { name: "Expand Zoo Negara" })).toBeChecked();

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

      await userEvent.click(getByRole("radio", { name: "Expand Zoo Negara" }));
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

  describe("accessibility for desktop", () => {
    const renderDesktopWithAccessibility = () =>
      render(
        <Menu
          menuLink={MenuLink}
          homeLink={HomeLink}
          homeLogoLink={HomeLogoLink}
          model={[
            {
              label: "Top Menu",
              url: "/top-menu",
              items: [
                {
                  label: "About Us",
                },
                {
                  label: "What about us",
                },
              ],
            },
            {
              label: "Top Menu 2",
              url: "/top-menu-2",
              items: [
                {
                  label: "About Us 2",
                },
              ],
            },
            {
              label: "News",
              url: "/sample-us",
            },
          ]}
          mobileStyle={{ display: "none" }}
          desktopStyle={{ display: "block" }}
          desktopClassName="desktop-class"
        />
      );

    const getMenuItem = (elem: Element) => elem.parentElement;

    it("should show aria-expanded=false when top menu has submenus", () => {
      renderDesktopWithAccessibility();
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "false");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "News" }))
      ).not.toHaveAttribute("aria-expanded", "false");
    });

    it("should show aria-expanded=true when top menu's subbutton is clicked and has submenus on click again will close", async () => {
      const getTopMenu = () =>
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }));

      renderDesktopWithAccessibility();
      await userEvent.click(
        screen.getByRole("button", { name: "Expand Top Menu" })
      );
      expect(getTopMenu()).toHaveAttribute("aria-expanded", "true");
      expect(getTopMenu()).toHaveClass("open");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "News" }))
      ).not.toHaveAttribute("aria-expanded", "true");

      await userEvent.click(
        screen.getByRole("button", { name: "Expand Top Menu" })
      );
      expect(getTopMenu()).toHaveAttribute("aria-expanded", "false");
      expect(getTopMenu()).not.toHaveClass("open");
    });

    it("should show aria-expanded=true when top menu's subbutton is clicked and is independant", async () => {
      renderDesktopWithAccessibility();
      await userEvent.click(
        screen.getByRole("button", { name: "Expand Top Menu" })
      );
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "true");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu 2" }))
      ).toHaveAttribute("aria-expanded", "false");

      await userEvent.click(
        screen.getByRole("button", { name: "Expand Top Menu 2" })
      );
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu 2" }))
      ).toHaveAttribute("aria-expanded", "true");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should show aria-expanded=true when using keyboard navigation", async () => {
      renderDesktopWithAccessibility();

      await userEvent.type(
        screen.getByRole("button", { name: "Expand Top Menu" }),
        "{space}"
      ); //menu should open
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "true");

      const topMenuItem = getMenuItem(
        screen.getByRole("menuitem", { name: "Top Menu" })
      );

      await userEvent.tab(); //next sub menu focus should remain open
      expect(topMenuItem).toHaveAttribute("aria-expanded", "true");

      await userEvent.tab(); //next next sub menu focus should remain open
      expect(topMenuItem).toHaveAttribute("aria-expanded", "true");

      await userEvent.tab(); //next menu should close on item
      expect(topMenuItem).toHaveAttribute("aria-expanded", "false");
    });

    it("should be able control expand button using keyboard", async () => {
      renderDesktopWithAccessibility();

      const topMenu = screen.getByRole("button", { name: "Expand Top Menu" });

      await userEvent.type(topMenu, "{space}");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "true");

      await userEvent.keyboard("{arrowup}");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "false");

      await userEvent.keyboard("{arrowdown}");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "true");

      await userEvent.keyboard("{escape}");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("accessibility for mobile", () => {
    const renderMobileWithAccessibility = () =>
      render(
        <Menu
          menuLink={MenuLink}
          homeLink={HomeLink}
          homeLogoLink={HomeLogoLink}
          model={[
            {
              label: "Top Menu",
              url: "/top-menu",
              items: [
                {
                  label: "About Us",
                },
                {
                  label: "What about us",
                },
              ],
            },
            {
              label: "Top Menu 2",
              url: "/top-menu-2",
              items: [
                {
                  label: "About Us 2",
                },
              ],
            },
            {
              label: "News",
              url: "/sample-us",
            },
          ]}
          mobileStyle={{ display: "block" }}
          desktopStyle={{ display: "none" }}
        />
      );

    const getMenuItem = (elem: Element) => elem.parentElement;

    it("should show aria-expanded=false when top menu has submenus", () => {
      renderMobileWithAccessibility();
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }))
      ).toHaveAttribute("aria-expanded", "false");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "News" }))
      ).not.toHaveAttribute("aria-expanded", "false");
    });

    it("should show aria-expanded=true when top menu's subbutton is clicked and has submenus on click again will close", async () => {
      const getTopMenu = () =>
        getMenuItem(screen.getByRole("menuitem", { name: "Top Menu" }));
      const getTopMenuParent = () => getTopMenu()?.parentElement;

      renderMobileWithAccessibility();
      await userEvent.click(
        screen.getByRole("radio", { name: "Expand Top Menu" })
      );
      expect(getTopMenu()).toHaveAttribute("aria-expanded", "true");
      expect(
        getMenuItem(screen.getByRole("menuitem", { name: "News" }))
      ).not.toHaveAttribute("aria-expanded", "true");

      await userEvent.click(
        screen.getByRole("radio", { name: "Expand Top Menu" })
      );
      expect(getTopMenu()).toHaveAttribute("aria-expanded", "false");
    });

    it("should show aria-expanded=true when using keyboard navigation", async () => {
      renderMobileWithAccessibility();

      const topMenuItem = getMenuItem(
        screen.getByRole("menuitem", { name: "Top Menu" })
      );

      await userEvent.click(
        screen.getByRole("radio", { name: "Expand Top Menu" })
      ); //menu should open
      expect(topMenuItem).toHaveAttribute("aria-expanded", "true");

      await userEvent.keyboard("{Space}"); //will close it
      expect(topMenuItem).toHaveAttribute("aria-expanded", "false");

      await userEvent.keyboard("{Enter}"); //will open it
      expect(topMenuItem).toHaveAttribute("aria-expanded", "true");

      await userEvent.keyboard(" "); //will remain..some bug here it
      expect(topMenuItem).toHaveAttribute("aria-expanded", "true");
    });
  });
});
