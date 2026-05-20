const { Given, When, Then } = require('@cucumber/cucumber')
const { POmanager } = require('../../pageObjects/POmanager');
const { test, expect } = require('@playwright/test');
const playwright = require('@playwright/test')

Given('Launch the application', { timeout: 10 * 1000 }, async function () {
  // Write code here that turns the phrase above into concrete actions

  this.loginPage = this.poManager.getLoginPage();
  await this.loginPage.goTo();
});


When('Login to application with {string} and {string}', async function (username, password) {
  // Write code here that turns the phrase above into concrete actions

  await this.loginPage.validLogin(username, password);
});


Then('Submit the login button', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log('Logged in successfully')
});

Then('Verify invalid login with {string}', async function (username) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator('#email').fill(username);
const password = this.page.locator('input[type="password"]');
const userName=await this.page.locator('#email').inputValue(); 
//inputValue()>>grab text from input field(when element not attached to the DOM)
console.log(userName);
await this.page.click('button:has-text("Sign In")');

await password.evaluate(el => el.reportValidity());

const message = await password.evaluate(el => el.validationMessage);
console.log(message);
//expect(message).toContain('Please fill in this field'); 
//- it is not working in headless mode, getting different msg: "Please fill out this field." instead "Please fill in this field"
expect(message.toLowerCase()).toMatch(/please fill (in|out) this field/);
});
