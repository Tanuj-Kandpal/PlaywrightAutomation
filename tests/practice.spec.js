const { test, expect } = require("@playwright/test");
test("Demo Test", async ({ page }) => {
  await page.goto("https://demoqa.com/");
});
