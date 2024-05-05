import { test, expect, Locator, Page } from "@playwright/test";

const isShownContent = async (page: Page, locator: Locator) => {
  await page.waitForTimeout(500); // 0.4s transition
  const maxHeight = await locator.evaluate((node) => {
    if (node.parentElement !== null)
      return getComputedStyle(node.parentElement).maxHeight;
  });
  return !(maxHeight === "0px" || maxHeight === "0");
};

test("Radio Accordion", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("Accordion").click();

  const accordionTitle1 = page.getByText("Radio 1");
  const accordionTitle2 = page.getByText("Radio 2");

  const accordionContent1 = page.getByText("First Content");
  const accordionContent2 = page.getByText("Second Content");

  await accordionTitle1.click();
  expect(await isShownContent(page, accordionContent1)).toBeTruthy();
  expect(await isShownContent(page, accordionContent2)).toBeFalsy();

  await accordionTitle2.click();
  expect(await isShownContent(page, accordionContent2)).toBeTruthy();
  expect(await isShownContent(page, accordionContent1)).toBeFalsy();

  await accordionTitle2.click();
  expect(await isShownContent(page, accordionContent1)).toBeFalsy();
  expect(await isShownContent(page, accordionContent2)).toBeFalsy();
});

test("Checkbox Accordion", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("Accordion").click();

  const accordionTitle1 = page.getByText("Checkbox 1");
  const accordionTitle2 = page.getByText("Checkbox 2");

  const accordionContent1 = page.getByText("Third Content");
  const accordionContent2 = page.getByText("Fourth Content");

  await accordionTitle1.click();
  expect(await isShownContent(page, accordionContent1)).toBeTruthy();
  expect(await isShownContent(page, accordionContent2)).toBeFalsy();

  await accordionTitle2.click();
  expect(await isShownContent(page, accordionContent2)).toBeTruthy();
  expect(await isShownContent(page, accordionContent1)).toBeTruthy();

  await accordionTitle2.click();
  expect(await isShownContent(page, accordionContent1)).toBeTruthy();
  expect(await isShownContent(page, accordionContent2)).toBeFalsy();
});
