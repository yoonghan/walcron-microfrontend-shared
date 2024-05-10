import { test, expect } from "@playwright/test";

test("Announcement", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("Announcement").click();

  expect(page.getByText("one announcement")).toBeVisible();

  const closeButton = page.getByLabel("Close Announcement");
  await closeButton.click();

  expect(page.getByText("one announcement")).not.toBeVisible();
});
