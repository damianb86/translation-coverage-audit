import { expect, test } from "@playwright/test";

test("opens visual preview for Translation Coverage Audit", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Translation Coverage Audit" })).toBeVisible();
  await expect(page.getByText("Find untranslated or stale storefront content before shoppers do.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
