import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
        await browser.pause(1000);
    })

    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.loginLocked()
        await browser.pause(1000);

        // await LoginPage.validateLockedOutUserError()
    })

    it('should login with problem_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.loginProblem()
        await HomePage.validateHomePage()
        await browser.pause(1000);
    })

    it('should login with performance_glitch_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.loginPerformance()
        await HomePage.validateHomePage()
        await browser.pause(1000);
    })

    it('should login with error_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.loginErrorUser()
        await HomePage.validateHomePage()
        await browser.pause(1000);
    })
})