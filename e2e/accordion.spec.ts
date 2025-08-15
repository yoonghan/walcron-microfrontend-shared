import { test, expect, Locator, Page } from "@playwright/test"

const isShownContent = async (page: Page, locator: Locator) => {
  const styling = await locator.evaluate((node) => {
    if (node.parentElement !== null) return getComputedStyle(node.parentElement)
  })

  const { maxHeight, overflow } = styling ?? {}
  return !(maxHeight === "0px" || maxHeight === "0") && overflow === "auto"
}

const click = async (page: Page, locator: Locator) => {
  await locator.click()
  await page.waitForTimeout(500) // 0.4s transition
}

test.describe("disabled javascript", () => {
  test.use({ javaScriptEnabled: false })

  test("Single Accordion", async ({ page }) => {
    await page.goto("/accordion/single")

    await page.getByText("Accordion", { exact: true }).click()

    const accordionTitle1 = page.getByText("Radio 1")
    const accordionTitle2 = page.getByText("Radio 2")

    const accordionContent1 = page.getByText("First Content")
    const accordionContent2 = page.getByText("Second Content")

    await click(page, accordionTitle1)
    expect(await isShownContent(page, accordionContent1)).toBeTruthy()
    expect(await isShownContent(page, accordionContent2)).toBeFalsy()

    await click(page, accordionTitle2)
    expect(await isShownContent(page, accordionContent2)).toBeTruthy()
    expect(await isShownContent(page, accordionContent1)).toBeFalsy()

    // await accordionTitle2.click(); --> does not work without javascript
    // expect(await isShownContent(page, accordionContent1)).toBeFalsy();
    // expect(await isShownContent(page, accordionContent2)).toBeFalsy();
  })

  test("Multiple Accordion", async ({ page }) => {
    await page.goto("/accordion/multiple")

    const accordionTitle1 = page.getByText("Checkbox 1")
    const accordionTitle2 = page.getByText("Checkbox 2")

    const accordionContent1 = page.getByText("Third Content")
    const accordionContent2 = page.getByText("Fourth Content")

    await click(page, accordionTitle1)
    expect(await isShownContent(page, accordionContent1)).toBeTruthy()
    expect(await isShownContent(page, accordionContent2)).toBeFalsy()

    await click(page, accordionTitle2)
    expect(await isShownContent(page, accordionContent2)).toBeTruthy()
    expect(await isShownContent(page, accordionContent1)).toBeTruthy()

    await click(page, accordionTitle2)
    expect(await isShownContent(page, accordionContent1)).toBeTruthy()
    expect(await isShownContent(page, accordionContent2)).toBeFalsy()
  })
})
