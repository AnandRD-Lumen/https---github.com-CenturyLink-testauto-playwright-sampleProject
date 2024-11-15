const{test,expect} = require('@playwright/test');


test('test', async ({ page }) => {
  await page.goto('https://mail.yahoo.com');
  //await page.goto('https://demo.guru99.com/test/radio.html');

  //await page.getByRole('checkbox', { name: 'Checkbox1' }).check();
  
  //await page.getByText("Sign in").click();
  //await page.getByRole('link', { name: 'Sign in' }).nth(1).click;
  //await page.pause()
  //await page.locator('text=Sign in').nth(1).click;
  const signInStatus = await page.locator('a').filter({ hasText: /^Sign in$/ }).isVisible()
  await page.pause()
  //IMP//Following command will wait for the element for the defined amount of time
  await page.waitForSelector('text=Sign in',{timeout:5000})
  //IMP//following command verifies the item identified is only one
  await expect(page.locator('a').filter({ hasText: /^Sign in$/ })).toHaveCount(1)

  

  if (signInStatus){
    await page.locator('a').filter({ hasText: /^Sign in$/ }).click();
  }

  //await page.pause()

  //getByText('Stay signed in')
  //*[@id="persistent"]
  //*[@id="login-username-form"]/div[3]/div[1]/span

//wait for the defined time it over writes the default wait time defined in the config file
  //await page.waitForTimeout(5000)


  //const abc = await page.getByRole('checkbox', { id: 'persistent' }).isChecked();
  await page.waitForLoadState('load')
  const xyz = await page.getByRole('checkbox', { id: 'persistent' }).isChecked();

  //const xyz =  page.locator('xpath=//input[@id="persistent"][@name="persistent"][1]');
  console.log("xyz", xyz)
  
  //const abc = await page.locator('xpath=//input[@id="persistent"][@name="persistent"]').isChecked();
  if (xyz) {
    //await page.pause()
    //console.log("already check box is checked");
    await page.getByText('Stay signed in').click();
    await page.pause()
    await page.waitForTimeout(5000)
    const lmn  = await page.getByText('Stay signed in').isChecked();
    console.log("lmn", lmn)
    await page.getByText('Stay signed in').check
    const tgt  = await page.getByText('Stay signed in').click();
    console.log("tgt", tgt)
    //await page.pause()
  } else {    
    await page.getByRole('checkbox', { id: 'persistent' }).check();
   // console.log("check box is checked Now");
  }


});
