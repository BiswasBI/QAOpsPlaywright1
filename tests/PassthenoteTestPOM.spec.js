const { test, expect } = require('@playwright/test');
const { POmanager } = require('../pageObjects/POmanager');
const { customtest } = require('../Utils/test-base');
//convert JSON->string->javascript object 
// because if JSON file have some other encoding format then it can fail when directly convert from JSON to JS objects.
const dataset = JSON.parse(JSON.stringify(require('../Utils/placeOrderTestData.json')))

for (const data of dataset) {
   test(`@web playwright test: End to End scenario: ${data.username}`, async ({ page }) => //annonimous function means function not having any name
   {


      const poManager = new POmanager(page);
      const loginPage = poManager.getLoginPage();
      const productsListPage = poManager.getProductsListPage();
      const cartPage = poManager.getCartPage();
      const orderPlacePage = poManager.getOrderPlacePage();

      await loginPage.goTo();
      await loginPage.validLogin(data.username, data.password);
      await productsListPage.productsAdd(data.productName1, data.productName2);
      await cartPage.checkOut();
      await orderPlacePage.orderPlace();


   });
}
//Parameterization using fixture
/*customtest(`playwright test: End to End scenario`, async ({ page, testDataForOrder }) => //annonimous function means function not having any name
{
   for (const data of testDataForOrder) {
      const poManager = new POmanager(page);
      const loginPage = poManager.getLoginPage();
      const productsListPage = poManager.getProductsListPage();
      const cartPage = poManager.getCartPage();
      const orderPlacePage = poManager.getOrderPlacePage();

      await loginPage.goTo();
      await loginPage.validLogin(data.username, data.password);
      await productsListPage.productsAdd(data.productName1, data.productName2);
      await cartPage.checkOut();
      await orderPlacePage.orderPlace();
   }


});*/

