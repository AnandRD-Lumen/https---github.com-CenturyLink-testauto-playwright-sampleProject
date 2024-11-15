import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://usidcwvcpmst01:89/');
  await page.getByRole('link', { name: 'Agreements' }).click();
  await page.getByRole('button', { name: 'Add ' }).click();
  await page.getByLabel('Agreement Name:').click();
  await page.getByLabel('Agreement Name:').fill('AutoNijaTest1');
  await page.getByPlaceholder('Search Provider...').click();
  await page.getByPlaceholder('Search Provider...').fill('Abc');
  await page.getByText('ABCO Industries, Inc').first().click();
  await page.getByLabel('Select').click();
  await page.getByRole('option', { name: '​Authorities' }).click();
  await page.pause();
  //await page.getByLabel('Toggle calendar').first().click();
  // await page.locator('#datepicker-1').first().fill('2021-09-01');
  // await page.locator('#datepicker-2').first().fill('2021-09-30');

  await page.locator('#datepicker-1').first().type('22-NOV-2023');
  await page.locator('#datepicker-2').first().type('30-NOV-2023');

  // await page.getByLabel('Toggle calendar').first().click();
  // await page.getByTitle('Wednesday, November 22, 2023').getByText('22').click();
  // await page.getByLabel('Toggle calendar').nth(1).click();
  // await page.getByTitle('Saturday, November 25, 2023').getByText('25').click();

  //await page.getByRole('button', { name: ' Save' }).click();
  await page.locator("//button[@type='submit']").click();
  await page.pause();
  await page.waitForLoadState();

    //regular playright method
    let AgreementNo = await page.getByRole('spinbutton').getAttribute("aria-valuenow")
    console.log("AgreementNo:",AgreementNo)


});