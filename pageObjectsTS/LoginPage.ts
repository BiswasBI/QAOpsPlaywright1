import { test, expect, Locator, Page } from '@playwright/test'

export class LoginPage {

    page: Page;
    userName: Locator;
    passWord: Locator;
    submitButton: Locator;

    constructor(page: any) {
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
    async validLogin(username: string, password: string) {
        await this.userName.waitFor();
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.submitButton.click();


    }


}

module.exports = { LoginPage }