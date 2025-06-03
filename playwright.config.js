// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    browserName: "chromium",
    headless: false,
  },
  expect: {
    timeout: 5000,
  },
  reporter: "html",
});
