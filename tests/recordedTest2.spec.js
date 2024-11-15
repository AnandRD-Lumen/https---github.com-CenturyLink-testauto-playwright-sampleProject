const{test,expect} = require('@playwright/test');


test('test', async ({ page }) => {
  await page.goto('https://mail.yahoo.com');
  //await page.goto('https://demo.guru99.com/test/radio.html');

  //await page.getByRole('checkbox', { name: 'Checkbox1' }).check();
  
  //await page.getByText("Sign in").click();
  //await page.getByRole('link', { name: 'Sign in' }).nth(1).click;
  await page.pause()
  //await page.locator('text=Sign in').nth(1).click;
  const signInStatus = await page.locator('a').filter({ hasText: /^Sign in$/ }).isVisible()

  //IMP//Following command will wait for the element for the defined amount of time
  await page.waitForSelector('text=Sign in',{timeout:5000})
  //IMP//following command verifies the item identified is only one
  await expect(page.locator('a').filter({ hasText: /^Sign in$/ })).toHaveCount(1)

  

  if (signInStatus){
    await page.locator('a').filter({ hasText: /^Sign in$/ }).click();
  }

  

  //const abc = await page.getByRole('checkbox', { id: 'persistent' }).isChecked();

  const abc = await page.locator('xpath=persistent').isChecked();
  if (abc) {
    //console.log("already check box is checked");
    await page.locator('#persistent').uncheck()
    await page.locator('#persistent').check();
    await page.pause()
  } else {
    
    await page.locator('#persistent').check();
   // console.log("check box is checked Now");
  }

  //await page.getByRole('radio', { name: 'webform' }).click();
  
  // const abc = await page.getByRole('checkbox', { id: 'vfb-6-0' }).isChecked();
  // if (abc) {
  //   print("already check box is checked")
  // } else {
    
  //   await page.getByRole('checkbox', { id: 'vfb-6-0' }).check();
  // }
  
  
  //await page.getByLabel('Search', { exact: true }).fill('Test Automation Tools');
});
