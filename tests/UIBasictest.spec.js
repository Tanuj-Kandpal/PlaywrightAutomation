const { test, expect } = require("@playwright/test");

const locators = {
  username: "[id='username']",
  password: "input#password",
  signInButton: "input#signInBtn",
  errorMsg: "[style*='block']",
  allItemsHeading: ".card-title a",
};

test("First Playwright Test", async ({ browser }) => {
  //Chrome
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://google.com");
});

test("Page Playwright test", async ({ browser, page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // await page.setViewportSize({ width: 1920, height: 1080 });
  const pageTitle = await page.title();
  console.log(pageTitle);
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await page.locator(locators.username).fill("rahulshetty");
  await page.locator(locators.password).fill("learning");
  await page.locator(locators.signInButton).click();
  const actualMsg = await page.locator(locators.errorMsg).textContent();
  console.log(actualMsg);
  await expect(page.locator(locators.errorMsg)).toContainText(
    "Incorrect username/password."
  );
  await page.locator(locators.username).fill("");
  await page.locator(locators.username).fill("rahulshettyacademy");
  await page.locator(locators.signInButton).click();
  const allTitle = await page
    .locator(locators.allItemsHeading)
    .allTextContents();

  console.log(allTitle);
});


