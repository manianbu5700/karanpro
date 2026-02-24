import { test, expect } from '@playwright/test'
test('Frame', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('abc')
    // await page.waitForTimeout(3000)
    await page.locator('(//a[@class="analystic"])[2]').click()
    const MultipleFrames = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const multi = await MultipleFrames.frameLocator('//iframe[@src="SingleFrame.html"]')
    await multi.locator('//input[@type="text"]').fill('abc')
    await page.waitForTimeout(3000)

})