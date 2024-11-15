import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://usidcwvcpmst01:89/');
  await page.getByRole('link', { name: 'Agreements' }).click();
  await page.getByRole('button', { name: 'Add ' }).click();
  await page.getByLabel('Agreement Name:').click();
  await page.getByLabel('Agreement Name:').fill('Prashant');
  await page.getByPlaceholder('Search Provider...').click();
  await page.getByPlaceholder('Search Provider...').fill('abc');
  await page.getByText('ABCO Industries, Inc').first().click();
  await page.getByLabel('Select').click();
  await page.getByText('Authorities').click();

  await page.getByLabel('Toggle calendar').first().click();
  await page.getByTitle('Thursday, November 30, 2023').getByText('30').click();
  await page.getByLabel('Toggle calendar').nth(1).click();
  await page.getByTitle('Thursday, November 30, 2023').getByText('30').click();
  await page.pause();
  await page.getByRole('button', { name: ' Save' }).click();
    
});