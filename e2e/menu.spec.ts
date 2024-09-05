import { test, expect } from "@playwright/test";

test.describe("desktop view", () => {
  test.use({
    viewport: { width: 1600, height: 1200 },
  });

  test("menu pop-up on hover", async ({ page }) => {
    await page.goto("http://localhost:3000/menu");

    const firstTopMenuItem = page.getByRole("link", {
      name: "Visitor Info",
      exact: true,
    });

    expect(firstTopMenuItem).toBeInViewport();

    await firstTopMenuItem.hover();

    await expect(
      page.getByRole("link", {
        name: "Opening Hours And Rates",
        exact: true,
      })
    ).toBeInViewport();
  });
});

test.describe("disabled javascript in mobile", () => {
  test.use({
    viewport: { width: 900, height: 1200 },
    javaScriptEnabled: false,
  });

  test("menu pop up in hamburger", async ({ page }) => {
    await page.goto("http://localhost:3000/menu");
    await expect(
      page.getByRole("link", { name: "Zoo Negara Malaysia" })
    ).toBeInViewport();

    const hamburgerMenu = page.getByLabel("Main Menu");

    await hamburgerMenu.click();

    const menuitem = page.getByRole("link", { name: "Visitor Info" });
    await expect(menuitem).toBeVisible();

    await hamburgerMenu.click();

    await expect(menuitem).not.toBeInViewport();
  });

  test("menu that has child will be expanded (with +) and child is clickable", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/menu");

    await page.getByLabel("Main Menu").click();

    await page
      .getByRole("menu")
      .getByLabel("Collapsed Visitor Info", { exact: true })
      .click();

    await page
      .getByRole("link", {
        name: "Opening Hours And Rates",
        exact: true,
      })
      .click();

    expect(page.url, "/visitor-info");
  });

  test("menu that had no child can be clicked", async ({ page }) => {
    await page.goto("http://localhost:3000/menu");

    await page.getByLabel("Main Menu").click();

    await page
      .getByRole("link", {
        name: "About Zoo",
        exact: true,
      })
      .click();
    expect(page.url, "/about-us");
  });
});
