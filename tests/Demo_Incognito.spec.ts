import { test, expect, Browser, Page, chromium } from '@playwright/test';

test ('abc',async () => {
//create a new browser instance
const browser = await chromium.launch({ headless: false, channel: 'chrome' });

//create a new incognito browser context
const context = await browser.newContext()

//create a new page inside context.
const page = await context.newPage()
await page.goto("https://google.com")
await page.pause()
//dispose context once it is no longer needed.
await context.close()
await browser.close();
  });