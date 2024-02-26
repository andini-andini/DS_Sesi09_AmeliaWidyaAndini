import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user credentials', async () => {
        //TODO
    })
})