import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get fieldUsername() {
        return $('#user-name');
    }

    get fieldPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    async login() {
        await this.fieldUsername.setValue(process.env.USERNAME_PROBLEM_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    open() {
        return super.open('/');
    }
}

export default new LoginPage();
