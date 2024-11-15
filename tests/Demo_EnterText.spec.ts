import { test,expect } from '@playwright/test';


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

test('Login Test @Sanity123', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.pause()

   await page.getByLabel('Search', { exact: true }).click();
   await page.getByLabel('Search', { exact: true }).fill('Test Automation Tools');
   await expect(page).toHaveTitle(/Google/);
  // //await page.getByLabel('Search', { exact: true }).setInputFiles
  // await page.pause()
});

