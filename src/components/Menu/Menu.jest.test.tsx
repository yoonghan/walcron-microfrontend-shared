import { render, screen } from "@testing-library/react"
import Menu, { MenuType } from "."
import { ReactNode } from "react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect } from "vitest"

describe("Menu", () => {
  const MenuLink = (text: string, href: string, onClick?: () => void) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        if (onClick) onClick()
      }}
    >
      {text}
    </a>
  )

  const HomeLink = (href: string, onClick: () => void, tabIndex: number) => (
    <a
      href={href}
      tabIndex={tabIndex}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      Zoo Negara Malaysia
    </a>
  )

  const HomeLogoLink = (helperClassName: string) => (
    <a
      href={"/"}
      className={helperClassName}
      onClick={(e) => e.preventDefault()}
    >
      <img src="img" alt="home link"></img>
    </a>
  )

  function renderMenuWithItems(
    isDesktop = false,
    shortcutComponent?: ReactNode,
  ) {
    const model: MenuType = [
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
    ]

    return render(
      <Menu
        menuLink={MenuLink}
        homeLink={HomeLink}
        homeLogoLink={HomeLogoLink}
        model={model}
        shortcutComponent={shortcutComponent}
        mobileStyle={!isDesktop ? { display: "block" } : { display: "none" }}
        desktopStyle={isDesktop ? { display: "block" } : { display: "none" }}
        desktopClassName="desktop-class"
        mobileClassName="mobile-class"
      />,
    )
  }

  it("should will display mobile home text that links to home", () => {
    const { getByRole } = renderMenuWithItems()

    expect(getByRole("link", { name: "Zoo Negara Malaysia" })).toHaveAttribute(
      "href",
      "/",
    )

    expect(
      getByRole("menuitemcheckbox", { name: "Expandable Zoo Negara" }),
    ).toBeVisible()

    expect(getByRole("button", { name: "Hamburger Menu" })).toBeVisible()
    expect(getByRole("checkbox", { name: "Hamburger Menu" })).toBeVisible()

    expect(getByRole("link", { name: "About Us" })).toBeVisible()
    expect(getByRole("link", { name: "Zoo Negara Logo" })).toBeVisible()
  })

  it("should display menu correctly for desktop", () => {
    const { getByRole } = renderMenuWithItems(true)

    expect(getByRole("link", { name: "home link" })).toHaveAttribute(
      "href",
      "/",
    )

    expect(getByRole("link", { name: "Zoo Negara" })).toBeVisible()
    expect(getByRole("link", { name: "About Us" })).toBeVisible()
    expect(getByRole("link", { name: "Zoo Negara Logo" })).toBeVisible()
  })

  it("should be memozied and forever not modified. It's a menu!", async () => {
    const { rerender, getByText } = renderMenuWithItems()
    expect(getByText("Zoo Negara Malaysia")).toBeVisible()
    rerender(
      <Menu
        menuLink={() => <></>}
        model={[]}
        homeLink={() => <>Not Memomzied</>}
        homeLogoLink={() => <></>}
      />,
    )
    expect(getByText("Zoo Negara Malaysia")).toBeVisible()
  })

  it("should replace submenu with main menu's root if url of submenu is missing", async () => {
    const { getByRole } = renderMenuWithItems(true)
    const expectedRootUrl = "/about-us"
    expect(getByRole("link", { name: "Zoo Negara" })).toHaveAttribute(
      "href",
      expectedRootUrl,
    )
    expect(getByRole("link", { name: "About Us" })).toHaveAttribute(
      "href",
      expectedRootUrl,
    )
  })

  it("should replace submenu url with # with topMenu", async () => {
    const { getByRole } = renderMenuWithItems(true)
    expect(getByRole("link", { name: "Zoo Negara Logo" })).toHaveAttribute(
      "href",
      "/about-us#logo",
    )
  })

  it("should render shortcut components for mobile if exist", () => {
    const { getByRole } = renderMenuWithItems(
      false,
      <button>I am a shortcut button</button>,
    )
    expect(
      getByRole("button", { name: "I am a shortcut button" }),
    ).toBeInTheDocument()
  })

  it("should render shortcut components for desktop if exist", () => {
    const { getByRole } = renderMenuWithItems(
      false,
      <button>I am a shortcut button</button>,
    )
    expect(
      getByRole("button", { name: "I am a shortcut button" }),
    ).toBeInTheDocument()
  })

  describe("Hiding side menu in mobile", () => {
    const renderMenuItemAndGetCheckBox = () => {
      const { getByRole } = renderMenuWithItems()
      return {
        sideMenuCheckBox: getByRole("checkbox", {
          name: "Hamburger Menu",
        }),
        getByRole,
      }
    }

    const assertIsSideMenuUncheck = (element: Element) => {
      expect(element).not.toBeChecked()
      expect(document.body.style.overflow).toBe("auto")
    }

    it("should have correct aria and className for hamburger menu buttons", () => {
      const { getByRole } = renderMenuItemAndGetCheckBox()
      const hamburgerMenuButton = getByRole("button", {
        name: "Hamburger Menu",
      })
      const hamburgerMenuCheckbox = getByRole("checkbox", {
        name: "Hamburger Menu",
      })

      expect(hamburgerMenuButton).toHaveAttribute("aria-haspopup", "true")
      expect(hamburgerMenuButton).toHaveAttribute("aria-expanded", "false")

      expect(hamburgerMenuButton).toHaveClass("show")
      expect(hamburgerMenuCheckbox.parentElement).toHaveClass("hide")
    })

    it("should have correct aria and className for submenu expandable buttons", async () => {
      const { getByRole } = renderMenuItemAndGetCheckBox()
      await userEvent.click(
        getByRole("button", {
          name: "Hamburger Menu",
        }),
      )
      const subMenuItemButton = getByRole("button", {
        name: "Expandable Zoo Negara",
      })
      const subMenuItemCheckbox = getByRole("menuitemcheckbox", {
        name: "Expandable Zoo Negara",
      })

      expect(subMenuItemButton).toHaveAttribute("aria-haspopup", "true")
      expect(subMenuItemButton).toHaveAttribute("aria-expanded", "false")

      expect(subMenuItemButton).toHaveClass("show-inline")
      expect(subMenuItemCheckbox.parentElement).toHaveClass("hide")
    })

    it("should uncheck the checkbox of side menu, as mobile have cache to stay on page while render new page", async () => {
      const { sideMenuCheckBox, getByRole } = renderMenuItemAndGetCheckBox()

      await userEvent.click(sideMenuCheckBox)
      expect(sideMenuCheckBox).toBeChecked()

      await userEvent.click(getByRole("link", { name: "News" }))
      assertIsSideMenuUncheck(sideMenuCheckBox)

      //retry
      await userEvent.click(getByRole("link", { name: "News" }))
      assertIsSideMenuUncheck(sideMenuCheckBox)
    })

    it("should not uncheck if the clicks are on links that are parent with child", async () => {
      const { sideMenuCheckBox, getByRole } = renderMenuItemAndGetCheckBox()
      await userEvent.click(sideMenuCheckBox)
      expect(sideMenuCheckBox).toBeChecked()

      await userEvent.click(
        getByRole("menuitemcheckbox", { name: "Expandable Zoo Negara" }),
      )
      expect(sideMenuCheckBox).toBeChecked()
    })

    it("should uncheck if the clicks are on child", async () => {
      const { getByRole, sideMenuCheckBox } = renderMenuItemAndGetCheckBox()
      await userEvent.click(sideMenuCheckBox)
      expect(sideMenuCheckBox).toBeChecked()

      await userEvent.click(getByRole("link", { name: "About Us" }))
      expect(sideMenuCheckBox).not.toBeChecked()

      //retry
      await userEvent.click(getByRole("link", { name: "About Us" }))
      expect(sideMenuCheckBox).not.toBeChecked()
    })

    it("should set body disable from scrolling if checked", async () => {
      const { sideMenuCheckBox } = renderMenuItemAndGetCheckBox()

      //check
      await userEvent.click(sideMenuCheckBox)
      expect(sideMenuCheckBox).toBeChecked()
      expect(document.body.style.overflow).toBe("hidden")

      //uncheck
      await userEvent.click(sideMenuCheckBox)
      assertIsSideMenuUncheck(sideMenuCheckBox)
    })
  })

  const renderMenuAccessibility = (isDesktop = false) =>
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
        mobileStyle={{ display: isDesktop ? "none" : "block" }}
        desktopStyle={{ display: isDesktop ? "block" : "none" }}
      />,
    )

  describe("accessibility for desktop", () => {
    const renderDesktopWithAccessibility = () => renderMenuAccessibility(true)

    it("should show aria-expanded=true when top menu's subbutton is clicked and has submenus on click again will close", async () => {
      renderDesktopWithAccessibility()

      const topMenuButton = screen.getByRole("button", {
        name: "Top Menu",
        expanded: false,
      })

      await userEvent.click(topMenuButton)
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true")
      expect(
        screen.getByRole("link", { name: "Top Menu" }).parentElement
          ?.parentElement,
      ).toHaveClass("open")

      await userEvent.click(topMenuButton)
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false")
    })

    it("should show aria-expanded=true when top menu's subbutton is clicked and is independant", async () => {
      renderDesktopWithAccessibility()
      const topMenuButton = screen.getByRole("button", {
        name: "Top Menu",
        expanded: false,
      })
      const topMenuButton_2 = screen.getByRole("button", {
        name: "Top Menu 2",
        expanded: false,
      })

      await userEvent.click(topMenuButton)
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true")
      expect(topMenuButton_2).toHaveAttribute("aria-expanded", "false")

      await userEvent.click(topMenuButton_2)
      expect(topMenuButton_2).toHaveAttribute("aria-expanded", "true")
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false")
    })

    it("should show aria-expanded=true when using keyboard navigation", async () => {
      renderDesktopWithAccessibility()

      const topMenuButton = screen.getByRole("button", {
        name: "Top Menu",
        expanded: false,
      })

      await userEvent.type(topMenuButton, "{space}") //menu should open

      await userEvent.tab() //next sub menu focus should remain open
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true")

      await userEvent.tab() //next next sub menu focus should remain open
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true")

      await userEvent.tab() //next menu should close on item
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false")
    })

    it("should be able control expand button using keyboard", async () => {
      renderDesktopWithAccessibility()

      const topMenuButton = screen.getByRole("button", {
        name: "Top Menu",
        expanded: false,
      })

      await userEvent.type(topMenuButton, "{space}")
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true")

      await userEvent.keyboard("{arrowup}")
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false")

      await userEvent.keyboard("{arrowdown}")
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true")

      await userEvent.keyboard("{escape}")
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false")
    })
  })

  describe("accessibility for mobile", () => {
    const renderMobileWithAccessibility = () => renderMenuAccessibility(false)

    it("should show aria-expanded=true when top menu's subbutton is clicked and has submenus on click again will close", async () => {
      renderMobileWithAccessibility()
      const topMenuCheckbox = screen.getByRole("menuitemcheckbox", {
        name: "Expandable Top Menu",
      })
      const topMenuButton = screen.getByRole("button", {
        name: "Expandable Top Menu",
        expanded: false,
      })

      await userEvent.click(topMenuButton)
      expect(topMenuCheckbox).toBeChecked()
      expect(topMenuButton).toHaveAttribute("aria-expanded", "true")

      await userEvent.click(topMenuButton)
      expect(topMenuCheckbox).not.toBeChecked()
      expect(topMenuButton).toHaveAttribute("aria-expanded", "false")
    })

    it("should show aria-expanded=true when menu is clicked", async () => {
      renderMobileWithAccessibility()
      const hamburgerMenuButton = screen.getByRole("button", {
        name: "Hamburger Menu",
        expanded: false,
      })
      const hamburgerMenuCheckbox = screen.getByRole("checkbox", {
        name: "Hamburger Menu",
      })

      await userEvent.click(hamburgerMenuButton)
      expect(hamburgerMenuCheckbox).toBeChecked()
      expect(hamburgerMenuButton).toHaveAttribute("aria-expanded", "true")

      await userEvent.click(hamburgerMenuButton)
      expect(hamburgerMenuCheckbox).not.toBeChecked()
      expect(hamburgerMenuButton).toHaveAttribute("aria-expanded", "false")
    })
  })
})
