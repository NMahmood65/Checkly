import { test, expect } from '@playwright/test'

test('login flow2', async({page}) => {
    const response = await page.goto('http://zero.webappsecurity.com')
    const login = await page.locator('#signin_button')
    login.click()
    //await page.getByRole('heading', { name: 'Log in to ZeroBank' })
    //const header = await page.locator('.heading >> h3')
    //await expect(header).toContainText('Log in to ZeroBank')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/login.html')
})


