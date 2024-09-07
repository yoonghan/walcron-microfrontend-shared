import { render, screen } from "@testing-library/react";
import Menu from ".";
import { ReactNode } from "react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("Menu", () => {
  const MenuLink = (
    text: string,
    href: string,
    onClick?: () => void,
    isAriaExpanded?: boolean
  ) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      aria-expanded={isAriaExpanded}
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
    const { getByRole, getByLabelText } = renderMenuWithItems();

    expect(getByRole("link", { name: "Zoo Negara Malaysia" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(getByLabelText("Hamburger Menu")).toBeInTheDocument();

    expect(getByRole("radio", { name: "Collapsed Zoo Negara" })).toBeVisible();
    expect(getByRole("link", { name: "About Us" })).toBeVisible();
    expect(getByRole("link", { name: "Zoo Negara Logo" })).toBeVisible();
  });

  it("should display menu correctly for desktop", () => {
    const { getByRole } = renderMenuWithItems(true);

    expect(getByRole("link", { name: "home link" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(getByRole("link", { name: "Zoo Negara" })).toBeVisible();
    expect(getByRole("link", { name: "About Us" })).toBeVisible();
    expect(getByRole("link", { name: "Zoo Negara Logo" })).toBeVisible();
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
    expect(getByRole("link", { name: "Zoo Negara" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
    expect(getByRole("link", { name: "About Us" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
  });

  it("should replace submenu url with # with topMenu", async () => {
    const { getByRole } = renderMenuWithItems(true);
    expect(getByRole("link", { name: "Zoo Negara Logo" })).toHaveAttribute(
      "href",
      "/about-us#logo"
    );
  });

  it("should not have link for mobile view, and click checks the radio", async () => {
    const { getByRole } = renderMenuWithItems(false);

    expect(
      getByRole("radio", { name: "Collapsed Zoo Negara" })
    ).not.toHaveAttribute("href");

    expect(
      getByRole("radio", { name: "Collapsed Zoo Negara" })
    ).not.toBeChecked();
    await userEvent.click(getByRole("radio", { name: "Collapsed Zoo Negara" }));
    expect(getByRole("radio", { name: "Expanded Zoo Negara" })).toBeChecked();

    expect(getByRole("link", { name: "News" })).toHaveAttribute("href");
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
        sideMenuCheckBox: getByRole("checkbox", { name: "Hamburger Menu" }),
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

      await userEvent.click(getByRole("link", { name: "News" }));
      assertIsSideMenuUncheck(sideMenuCheckBox);

      //retry
      await userEvent.click(getByRole("link", { name: "News" }));
      assertIsSideMenuUncheck(sideMenuCheckBox);
    });

    it("should not uncheck if the clicks are on links that are parent with child", async () => {
      const { sideMenuCheckBox, getByRole } = renderMenuItemAndGetCheckBox();
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(
        getByRole("radio", { name: "Collapsed Zoo Negara" })
      );
      expect(sideMenuCheckBox).toBeChecked();
    });

    it("should uncheck if the clicks are on child", async () => {
      const { getByRole, sideMenuCheckBox } = renderMenuItemAndGetCheckBox();
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(getByRole("link", { name: "About Us" }));
      expect(sideMenuCheckBox).not.toBeChecked();

      //retry
      await userEvent.click(getByRole("link", { name: "About Us" }));
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

    it("should show aria-expanded=true when top menu's subbutton is clicked and has submenus on click again will close", async () => {
      renderDesktopWithAccessibility();

      const topMenuButton = screen.getByRole("button", { name: "Top Menu" });

      await userEvent.click(topMenuButton);
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true");
      expect(
        screen.getByRole("link", { name: "Top Menu" }).parentElement
          ?.parentElement
      ).toHaveClass("open");

      await userEvent.click(topMenuButton);
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false");
    });

    it("should show aria-expanded=true when top menu's subbutton is clicked and is independant", async () => {
      renderDesktopWithAccessibility();
      const topMenuButton = screen.getByRole("button", { name: "Top Menu" });
      const topMenuButton_2 = screen.getByRole("button", {
        name: "Top Menu 2",
      });

      await userEvent.click(topMenuButton);
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true");
      expect(topMenuButton_2).toHaveAttribute("aria-expanded", "false");

      await userEvent.click(topMenuButton_2);
      expect(topMenuButton_2).toHaveAttribute("aria-expanded", "true");
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false");
    });

    it("should show aria-expanded=true when using keyboard navigation", async () => {
      renderDesktopWithAccessibility();

      const topMenuButton = screen.getByRole("button", { name: "Top Menu" });

      await userEvent.type(topMenuButton, "{space}"); //menu should open

      await userEvent.tab(); //next sub menu focus should remain open
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true");

      await userEvent.tab(); //next next sub menu focus should remain open
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true");

      await userEvent.tab(); //next menu should close on item
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false");
    });

    it("should be able control expand button using keyboard", async () => {
      renderDesktopWithAccessibility();

      const topMenuButton = screen.getByRole("button", { name: "Top Menu" });

      await userEvent.type(topMenuButton, "{space}");
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true");

      await userEvent.keyboard("{arrowup}");
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false");

      await userEvent.keyboard("{arrowdown}");
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true");

      await userEvent.keyboard("{escape}");
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false");
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

    it("should show aria-expanded=true when top menu's subbutton is clicked and has submenus on click again will close", async () => {
      renderMobileWithAccessibility();
      await userEvent.click(
        screen.getByRole("radio", { name: "Collapsed Top Menu" })
      );
      await userEvent.click(
        screen.getByRole("radio", { name: "Expanded Top Menu" })
      );
    });

    it("should show aria-expanded=true when using keyboard navigation", async () => {
      renderMobileWithAccessibility();

      await userEvent.click(
        screen.getByRole("radio", { name: "Collapsed Top Menu" })
      ); //menu should open
      expect(
        screen.getByRole("radio", { name: "Expanded Top Menu" })
      ).toBeInTheDocument();

      await userEvent.keyboard("{Space}"); //will close it
      expect(
        screen.getByRole("radio", { name: "Collapsed Top Menu" })
      ).toBeInTheDocument();

      await userEvent.keyboard("{Enter}"); //will open it
      expect(
        screen.getByRole("radio", { name: "Expanded Top Menu" })
      ).toBeInTheDocument();

      await userEvent.keyboard(" "); //will remain..some bug here it
      expect(
        screen.getByRole("radio", { name: "Expanded Top Menu" })
      ).toBeInTheDocument();
    });

    it("should show aria-expanded=true when menu is clicked", async () => {
      renderMobileWithAccessibility();

      await userEvent.click(screen.getByLabelText("Hamburger Menu"));
      expect(
        screen.getByRole("checkbox", { name: "Hamburger Menu" })
      ).toBeChecked();

      await userEvent.keyboard("{Space}"); //will close it
      expect(
        screen.getByRole("checkbox", { name: "Hamburger Menu" })
      ).not.toBeChecked();
    });
  });
});
