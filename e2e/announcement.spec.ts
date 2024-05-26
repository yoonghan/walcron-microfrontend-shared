import { test, expect } from "@playwright/test";

test.describe("disabled javascript", () => {
  test.use({ javaScriptEnabled: false });

  test("Announcement", async ({ page }) => {
    await page.goto("/announcement");

    expect(
      await page.getByRole("status", { name: "Announcement" }).count()
    ).toBe(1);
    expect(page.getByText("one announcement")).toBeVisible();

    const closeButton = page.getByLabel("Close Announcement");
    await closeButton.click();

    //use count to check in playwright.
    expect(
      await page.getByRole("status", { name: "Announcement" }).count()
    ).toBe(0);
  });
});
