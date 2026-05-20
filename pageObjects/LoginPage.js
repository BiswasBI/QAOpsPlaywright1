
const { expect } = require('@playwright/test')
class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator('#email');
        this.passWord = page.locator("[type='password']");
        this.submitButton = page.locator("[type='submit']");

    }

    async goTo() {
        await this.page.goto("https://www.passthenote.com/auth/login");
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");
    }
    async validLogin(username, password) {
        await this.userName.waitFor();
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.submitButton.click();


    }


}

module.exports = { LoginPage }