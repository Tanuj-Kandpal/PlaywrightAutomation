const { test, expect } = require("@playwright/test");

const locators = {
  username: "[id='username']",
  password: "input#password",
  signInButton: "input#signInBtn",
  errorMsg: "[style*='block']",
  allItemsHeading: ".card-title a",
  dropdown: "select.form-control",
  radioOption: "span.checkmark",
  okayPopUp: "#okayBtn",
  termsCheckbox: "#terms",
  blinkingText: ".blinkingText",
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

test("UI Dropdown", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator(locators.username).fill("rahulshettyacademy");
  await page.locator(locators.password).fill("learning");
  await page.locator(locators.dropdown).selectOption("consult");
  // await page.locator(locators.signInButton).click();
  await page.locator(locators.radioOption).nth(1).click();
  await expect(page.locator(locators.radioOption).nth(1)).toBeChecked();
  await page.locator(locators.okayPopUp).click();
  await page.locator(locators.termsCheckbox).click();
  await expect(page.locator(locators.termsCheckbox)).toBeChecked();
  await page.locator(locators.termsCheckbox).uncheck();
  //assertion
  await expect(
    await page.locator(locators.termsCheckbox).isChecked()
  ).toBeFalsy();

  await expect(page.locator(locators.blinkingText).first()).toContainText(
    "Free Access to InterviewQues/ResumeAssistance/Material"
  );
  // await page.pause();
});
