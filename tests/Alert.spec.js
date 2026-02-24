import { test, expect } from '@playwright/test'
test('Alert', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    await page.once('dialog', async (dialog) => {
        console.log("Simple Alert:", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@onclick="alertbox()"]').click()
    // await page.waitForTimeout(3000)
    await page.locator('(//a[@class="analystic"])[2]').click()//-------->(//a[@class="analystic"])[2] passing index in square brackets

    await page.once('dialog', async (dialog) => {
        console.log("Confirmation Alert:", dialog.message())
        await dialog.dismiss()
    })
    // await page.waitForTimeout(3000)

    await page.locator('//button[contains(text(),"click the button to display a ")]').click()//------->//button[contains(text(),"click the button to display a ")]  

    await page.locator('(//a[@class="analystic"])[3]').click()                                   //         using contains for take partial text

    await page.once('dialog', async (dialog) => {
        console.log("Prompt Alert:", dialog.message())
        await dialog.accept('abc')
    })

    await page.locator('//button[@onclick="promptbox()"]').click()

})