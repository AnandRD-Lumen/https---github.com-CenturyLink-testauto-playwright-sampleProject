import { test, expect } from '@playwright/test';


test('Radio Button Demo', async ({ page }) => {
//   await page.goto('https://demos.telerik.com/aspnet-ajax/button/examples/radiosandcheckboxes/defaultcs.aspx')
//   //https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/
  
//   await page.pause()



await page.goto("http://demo.guru99.com/test/radio.html") 
//#1st way 
await page.locator('#vfb-7-1').check() 

// //#2nd way To execute javascript Code in Playwright we have to use .evaluate() method. 
// await page.evaluate('document.getElementById("vfb-7-1").checked=true;') 

// //#3rd Way We can execute the javascript even by using the query_Selector method. In query_selector() we find the locator and store it in the variable, and pass that variable in the evaluation() method. 
// element = page.query_selector('#vfb-7-1') 
// element.evaluate('ele1 => ele1.checked=true') 

//# Verify radio button is selected or not using assertion 
expect(page.locator('#vfb-7-1').isChecked())

await page.pause()
//# to check second radio button 
await page.locator('#vfb-7-2').check() 
//await page.close() 
//browser.close() 


})