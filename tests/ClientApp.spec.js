const { test } = require("@playwright/test");

test("Browser Context Validating Error Login", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").fill("Iamking@000");
  await page.locator("#login").click();
  //Wait for network idle
  //   await page.waitForLoadState("networkidle");
  //Second solution if network idle did not work
  await page.locator(".card-body b").nth(0).waitFor();
  const productHeading = await page.locator(".card-body b").allTextContents();
  console.log(productHeading);
});
