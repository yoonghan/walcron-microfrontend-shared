import { test, expect } from "@playwright/test";

test.describe("disabled javascript", () => {
  test.use({ javaScriptEnabled: false });

  test("on link click", async ({ page }) => {
    await page.goto("/minimenu");
    const title = await page.getByText("Title: Objective", { exact: true });

    expect(
      await title.evaluate((node) => node.getBoundingClientRect().top)
    ).toBeGreaterThan(100);

    await page.getByRole("link", { name: "Objective" }).click();

    expect(
      await title.evaluate((node) =>
        Math.floor(node.getBoundingClientRect().top)
      )
    ).toBe(0);
  });
});

test.describe("enabled javascript", () => {
  test("hash link to work", async ({ page }) => {
    await page.goto("/minimenu#faq");
    const title = await page.getByText("Title: Frequent Asked Questions", {
      exact: true,
    });

    expect(
      await title.evaluate((node) =>
        Math.floor(node.getBoundingClientRect().top)
      )
    ).toBe(0);
  });

  test("scroll with observation", async ({ page }) => {
    const scrollY = 1000;
    await page.goto("/minimenu");
    const title = await page.getByText("Title: Frequent Asked Questions", {
      exact: true,
    });

    const oldOffsetHeight = await title.evaluate((node) =>
      Math.floor(node.getBoundingClientRect().top)
    );

    await page.mouse.wheel(0, scrollY); //not 100%, so do both.
    await page.evaluate(() => {
      window.scrollY = scrollY;
    });

    expect(
      await title.evaluate((node) =>
        Math.floor(node.getBoundingClientRect().top)
      )
    ).toBe(oldOffsetHeight - scrollY);
  });
});
