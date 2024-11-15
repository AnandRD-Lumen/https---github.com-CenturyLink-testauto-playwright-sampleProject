const{test,expect} = require('@playwright/test');
const { timeout } = require('../playwright.config');

test('SDP Application', async ({ page }) => {
  await page.goto("https://ctlcentral-itv2.test.qintra.com/portal/site/qcentral/index.jsp")
  await page.pause()
   
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('slstst5@centurylink.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  ///how you enter encripted ..need to explore.
  await page.getByPlaceholder('Password').fill('SourGum2020');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByText('Selling').nth(1).waitFor('state:visible')
  //check page title and url
  await expect(page).toHaveURL('https://ctlcentral-itv2.test.qintra.com/portal/site/qcentral/index.jsp/')

  //following assertion will fail because the element exists with text
  //await expect(page).toHaveTitle(/.*MyCTLcentral.*/).timeout(30000)
  await expect(page).toHaveTitle(/.*MyCTLcentral.*/)

 
   await page.getByText('Selling').nth(1).hover()
   await page.getByText('Direct Ordering').nth(1).hover()
   await page.getByText('SDP Ordering').nth(1).click()
   //await page.pause()
   //await page.locator('#requestType').waitFor('timeout:30000');

   await page.locator('#requestType').selectOption('INS');
   await page.locator('#salesGroupId').selectOption('PREMIER');
   await page.locator('#productType').selectOption('IQ');
   await page.locator('#custName').click();


   await page.locator('#custName').fill('AMERICAN PETROLIUM INSTITUTE');
   await page.locator('input[name="salesOrder\\.companyAddr1"]').click();
   await page.locator('input[name="salesOrder\\.companyAddr1"]').fill('11 floor');
   await page.locator('#ordCity').click();


   await page.locator('#ordCity').fill('WASHINGTON');
//  await page.locator('#ordCity').press('Tab');
  await page.locator('#ordState').selectOption('DC');
  await page.locator('#zipCode').fill('20001');
  await page.locator('input[name="salesOrder\\.ilinkId"]').fill('123');
  await page.getByLabel('Search').click();
  await page.getByLabel('Search').fill('10346826');
  await page.locator('#remarks').click();
  await page.locator('#remarks').fill("Automation Ninja's");

  await page.getByRole('button', { name: 'Create Order' }).click()
  //await page.pause()

  await page.getByRole('button', { name: 'Save' }).click()
  //await page.pause()
  //await page.getByText('Selling').nth(1).hover()
  // await page.getByText('Order Status').nth(4).click();
  // page.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.dismiss().catch(() => {});
  // });


  //by default value c is selected. for ViewOrderDetail ..{label:'January'}
  //await page.locator('select[name="actiontype"]').selectOption('C');

//   await page.getByText('MyBase').nth(1).click();
//   await page.getByText('My Accounts').nth(1).click();
//   await page.getByText('Opportunities').nth(1).click();
  await page.getByText('Logout').click();

  await expect(page.getByText('You are now logged out of this site.')).toHaveCount(1);


if (await page.getByText('You are now logged out of this site.').isVisible) {
    console.log("Passed Logged out successfully")
    
} else {
    console.log("Failed not logged out")
}


  // ---------------------
//   await context.close();
//   await browser.close();
})