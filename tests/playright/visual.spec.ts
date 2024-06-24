import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("main navigation", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("has title", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(
      /Conexa + Zenklub - Desafio Frontend [Adriano Cahete]/
    );
  });

  test("has professional name", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await expect(
      page.getByRole("heading", { name: "Professional Name" })
    ).toBeVisible();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "psychologist" })
    ).toBeVisible();
  });
});

test("has review data", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.locator("rating")).toBeVisible();

  await expect(page.locator("rating-reviews")).toHaveText("/reviews/");

  await expect(page.locator("rating-value")).toBeTruthy();
});
