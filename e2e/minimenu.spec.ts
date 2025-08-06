import { test, expect, Page } from "@playwright/test";

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
    ).toBe(-1);
  });
});

//make sure test do not share and not in parallel.
test.describe.configure({mode: "serial"})

test.describe("enabled javascript", () => {
  const wheelY = async (page: Page, scrollY: number) => {
    await page.mouse.wheel(0, scrollY);
    await page.waitForTimeout(200);
  };

  test("hash link to work", async ({ page }) => {
    await page.goto("/minimenu#faq");
    const title = await page.getByText("Title: Frequent Asked Questions", {
      exact: true,
    });

    expect(
      await title.evaluate((node) =>
        Math.floor(node.getBoundingClientRect().top)
      )
    ).toBe(-1);
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

    await wheelY(page, scrollY);

    expect(
      await title.evaluate((node) =>
        Math.floor(node.getBoundingClientRect().top)
      )
    ).toBe(oldOffsetHeight - scrollY);
  });

  test("minimenu is underlined when scrolled", async ({ page }) => {
    page.setViewportSize({ width: 1024, height: 600 });

    const assertClassHasUnderline = async (link: string) => {
      const className = await page
        .getByRole("link", { name: link })
        .evaluate((node) => node.getAttribute("class"));
      expect(className).toContain("underline");
    };

    await page.goto("/minimenu");
    await page.waitForTimeout(200);
    await assertClassHasUnderline("About Us");

    await wheelY(page, 600);
    await assertClassHasUnderline("Purpose");

    await wheelY(page, 350);

    await wheelY(page, 50);
    await assertClassHasUnderline("Objective");

    await wheelY(page, 700);
    await assertClassHasUnderline("Mission");
  });
});
