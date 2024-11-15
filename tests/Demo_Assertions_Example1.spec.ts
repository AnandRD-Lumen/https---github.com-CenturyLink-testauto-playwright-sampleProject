import { test, expect} from '@playwright/test';
//const { timeout } = require('../playwright.config')

test('Assertions Demo', async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/")
   // await page.pause()

    //check Element Prsent/Not Present
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
        if(await page.$('text=The Kitchen')){
            await page.locator('text=The Kitchen').click
        }
    //check Element Visible/Hidden

    await expect(page.locator('text=The Kitchen')).toBeVisible()

    //following line will fail becasuse the element not hidden
    //await expect(page.locator('text=The Kitchen')).toBeHidden()
    
    //check Element Enabled/Disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    
    //Following line will fail because the element is not disabled
    //await expect(page.locator('text=The Kitchen')).toBeDisabled()

    //Text Matchese Value or not
    //await expect(page.locator('text=The Kitchen')).toHaveText('Kitchen')
    //await expect(page.locator('text=The Kitchen')).not.toHaveText('Kitchen')
    
    //Element attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')

    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)

    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //check page title and url
       
    await expect(page).toHaveURL('https://kitchen.applitools.com/')

    //following assertion will fail because the element exists with text
    //await expect(page).toHaveTitle('The Kitchen')
    const text = await page.getByRole('heading', { name: 'The Kitchen' }).textContent()
    console.log("Name:-",text)

    //const TextVisible = await page.locator('text=The Kitchen').isVisible()
    //Note//if await is not used it will return promise.
    //It will wait for actionTimeout: 30000 & then fail if not found.
    //const TextVisible = await page.locator('text=Anand').waitFor('visible')

    //It will not wait , it will mark it as false if not found immediately.
    //const TextVisible = await page.locator('text=Anand').isVisible()
    //console.log("TextVisible:-",TextVisible)

    //const TextVisible = await page.locator('text=Anand').isVisible({ timeout: 120000 });
    //console.log("TextVisible:", TextVisible);
    

//     await page.locator('text=Anand').waitFor({ state: 'visible', timeout: 120000 });
// const TextVisible = await page.locator('text=Anand').isVisible();
// console.log("TextVisible:", TextVisible)



let TextVisible = false;
try {
    // It will wait for the element to be visible within the specified timeout
    await page.locator('text=Anand').waitFor({ state: 'visible', timeout: 5000 });
    TextVisible = await page.locator('text=Anand').isVisible();
} catch (error) {
    console.log("Element 'Anand' not visible within the timeout period.");
}

console.log("TextVisible:", TextVisible);

})