const playwright = require('@playwright/test');
const { POmanager } = require('../../pageObjects/POmanager');
const { Before, After, AfterStep, BeforeStep, Status } = require('@cucumber/cucumber')

Before(async function () {
    const browser = await playwright.chromium.launch(
        {
            headless: false
        }
    );
    const context = await browser.newContext();
    this.page = await context.newPage(); //this.page - attached to world constructor, so it valid to entire Sneraio
    this.poManager = new POmanager(this.page); //this.poManager - attached to world constructor, so it valid to entire Sneraio
    console.log('Before scenario test done');
});

After(function () {
    console.log('After scenario test done');

});

BeforeStep(function () {
    console.log('Before Step test done');

});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' });
        console.log('After Step test done');
    }

});