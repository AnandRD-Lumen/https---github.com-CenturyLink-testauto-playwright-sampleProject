import {test, expect} from '@playwright/test';


test('Select Demo', async ({ page }) => {
  await page.goto('https://mail.yahoo.com');
  const signInStatus = await page.locator('a').filter({ hasText: /^Sign up$/ }).isVisible()

  await page.pause()

  //IMP//Following command will wait for the element for the defined amount of time
  await page.waitForSelector('text=Sign up',{timeout:5000})
  //IMP//following command verifies the item identified is only one
  await expect(page.locator('a').filter({ hasText: /^Sign up$/ })).toHaveCount(1)

  if (signInStatus){
    await page.locator('a').filter({ hasText: /^Sign up$/ }).click();
  }

  //await page.pause()
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('Anand');

  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('Deshpande');

  await page.getByPlaceholder('Email').fill('AutoNinja10567');
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('AutoNinjas123@!');

  await page.locator('#usernamereg-month').click();
  //Following will select the item with value of 1 from the select options( its default option)
    //await page.locator('#usernamereg-month').selectOption('1');
  //Following will select the item with value of 1 from the select options( its default option)
    //await page.locator('#usernamereg-month').selectOption({value:'1');
  //Following will select the item based on the index
    await page.locator('#usernamereg-month').selectOption({index:1})
 // await page.locator('#usernamereg-month').selectOption({label:'January'})
  await page.getByPlaceholder('Day').fill('1');
  await page.getByPlaceholder('Year').fill('2024');
  await page.pause()

});