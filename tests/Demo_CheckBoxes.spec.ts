//const{test,expect} = require('@playwright/test');
import { test,expect } from '@playwright/test';


test('Check boxes Demo', async ({ page }) => {

    await page.goto("http://demo.guru99.com/test/radio.html") 
    //#1st way 
    await page.locator('#vfb-6-0').check() 

    // checking whether checked or not
    await page.pause()
    await expect(page.locator('#vfb-6-0').isChecked())
    //await page.pause()

    //# to uncheck radio button 
    await page.locator('#vfb-6-0').uncheck() 

    //check second checkbox
    await page.locator('#vfb-6-1').check()
    //check third checkbox
    await page.locator('#vfb-6-2').check()

})