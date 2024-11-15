import {test, expect} from '@playwright/test';

test('Assertions Demo', async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/")
    await page.pause()

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
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('Kitchen')
    
    //Element attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')

    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)

    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //check page title and url
       
    await expect(page).toHaveURL('https://kitchen.applitools.com/')

    //following assertion will fail because the element exists with text
    await expect(page).toHaveTitle('The Kitchen')



})