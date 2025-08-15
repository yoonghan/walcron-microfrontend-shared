import { test, expect, Page } from "@playwright/test"

const gotoMenuPage = async (page: Page) =>
  await page.goto("http://localhost:3000/menu")

test.describe("desktop view", () => {
  test.use({
    viewport: { width: 1600, height: 1200 },
  })

  test("menu pop-up on hover", async ({ page }) => {
    await gotoMenuPage(page)

    const firstTopMenuItem = page.getByRole("link", {
      name: "Visitor Info",
      exact: true,
    })

    expect(firstTopMenuItem).toBeInViewport()

    await firstTopMenuItem.hover()

    await expect(
      page.getByRole("link", {
        name: "Opening Hours And Rates",
        exact: true,
      }),
    ).toBeInViewport()
  })
})

test.describe("mobile view", () => {
  test.use({
    viewport: { width: 900, height: 1200 },
  })

  const getHamburgerMenu = (page: Page) =>
    page.getByRole("button", {
      name: "Hamburger Menu",
    })

  test("menu pop up in hamburger", async ({ page }) => {
    await gotoMenuPage(page)
    await expect(
      page.getByRole("link", { name: "Zoo Negara Malaysia" }),
    ).toBeInViewport()

    await getHamburgerMenu(page).click()

    const menuitem = page.getByRole("link", { name: "Visitor Info" })
    await expect(menuitem).toBeVisible()

    await getHamburgerMenu(page).click()

    await expect(menuitem).not.toBeInViewport()
  })

  test("menu that has child will be expanded (with +) and child is clickable", async ({
    page,
  }) => {
    await gotoMenuPage(page)

    await getHamburgerMenu(page).click()

    await page.getByRole("button", { name: "Expandable Visitor Info" }).click()

    await page
      .getByRole("link", {
        name: "Opening Hours And Rates",
        exact: true,
      })
      .click()

    expect(page.url, "/visitor-info")
  })

  test("menu have change able submenu with label - and +", async ({ page }) => {
    const assertContent = async (button, expectedContent: string) => {
      const contentStyle = await button.evaluate((element) =>
        window.getComputedStyle(element, ":before").getPropertyValue("content"),
      )

      expect(contentStyle).toEqual(`"${expectedContent}"`)
    }

    await gotoMenuPage(page)

    await getHamburgerMenu(page).click()

    const button = await page.getByRole("button", {
      name: "Expandable Visitor Info",
    })
    await assertContent(button, "+")

    await button.click()
    await assertContent(button, "-")
  })
})

test.describe("disabled javascript in mobile", () => {
  test.use({
    viewport: { width: 900, height: 1200 },
    javaScriptEnabled: false,
  })

  const getHamburgerMenu = (page: Page) =>
    page.getByRole("checkbox", {
      name: "Hamburger Menu",
    })

  test("menu pop up in hamburger", async ({ page }) => {
    await gotoMenuPage(page)
    await expect(
      page.getByRole("link", { name: "Zoo Negara Malaysia" }),
    ).toBeInViewport()

    await getHamburgerMenu(page).click()

    const menuitem = page.getByRole("link", { name: "Visitor Info" })
    await expect(menuitem).toBeVisible()

    await getHamburgerMenu(page).click()

    await expect(menuitem).not.toBeInViewport()
  })

  test("menu that has child will be expanded (with +) and child is clickable", async ({
    page,
  }) => {
    await gotoMenuPage(page)

    await getHamburgerMenu(page).click()

    await page
      .getByRole("menuitemcheckbox", { name: "Expandable Visitor Info" })
      .click()

    await page
      .getByRole("link", {
        name: "Opening Hours And Rates",
        exact: true,
      })
      .click()

    expect(page.url, "/visitor-info")
  })

  test("menu that had no child can be clicked", async ({ page }) => {
    await gotoMenuPage(page)

    await getHamburgerMenu(page).click()

    await page
      .getByRole("link", {
        name: "About Zoo",
        exact: true,
      })
      .click()
    expect(page.url, "/about-us")
  })

  test("menu have change able submenu with label - and +", async ({ page }) => {
    const assertContent = async (button, expectedContent: string) => {
      const contentStyle = await button.evaluate((element: Element) => {
        const parentLabel = element.parentElement
        if (parentLabel !== null)
          return window
            .getComputedStyle(parentLabel, ":before")
            .getPropertyValue("content")
        else return null
      })

      expect(contentStyle).toEqual(`"${expectedContent}"`)
    }

    await gotoMenuPage(page)

    await getHamburgerMenu(page).click()

    const checkbox = await page.getByRole("menuitemcheckbox", {
      name: "Expandable Visitor Info",
    })
    await assertContent(checkbox, "+")

    await checkbox.click()
    await assertContent(checkbox, "-")
  })
})
