import { test, expect, BrowserContext, Page, chromium } from '@playwright/test';

test('test', async () => {
  const browser: BrowserContext = await chromium.launchPersistentContext('', { headless: false, channel: 'chrome' });

  // remove extra tab in browser window hack
  const pages: Page[] = browser.pages();
  const page: Page = pages[0];

  await page.goto('https://www.example.com');
  await page.pause();
  await expect(page.locator('div').filter({ hasText: 'example' })).toBeVisible();
});