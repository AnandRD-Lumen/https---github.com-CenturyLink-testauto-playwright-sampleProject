import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });
  test.afterEach(async ({ page }) => {
    // Go to the starting url before each test.
     console.log('Testing complete')
  });

  test('main navigation1', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  test('main navigation2', async ({ page }) => {
    // Assertions use the expect title ..using the regular expression
    await expect(page).toHaveTitle(/.*Playwright/);
    
// Assertions use the expect title ..checking exact string
await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

  });
});