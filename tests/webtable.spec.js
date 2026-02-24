import { test, expect } from '@playwright/test'
test('webtable', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const rowdata = await page.locator('//table[@id="table02"]//tbody//tr[2]//td').allTextContents()
    console.log(rowdata)
    await expect(rowdata).toContain('Garrett Winters')

    const singledata = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
    console.log(singledata)
    await expect(singledata).toEqual('San Francisco')

    const columndata = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
    console.log(columndata)
    // await expect(columndata).toContain('Accountant')


})