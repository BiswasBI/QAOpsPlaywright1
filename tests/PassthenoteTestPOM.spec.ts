import { test, expect, Page } from '@playwright/test'
import { POmanager } from '../pageObjectsTS/POmanager';
import {customTest} from '../Utils/test-base';
import dataset from '../Utils/placeOrderTestData.json' with { type: 'json' };;

for (const data of dataset) {
   test.only(`playwright test: End to End scenario: ${data.username}`, async ({ page }) => //annonimous function means function not having any name
   {

      console.log("RUNNING REGRESSION SCRIPTS WITH USER AND PRODUCTS: "+data.username+" | "+data.productName1+" | "+data.productName2);
      const poManager = new POmanager(page);
      const loginPage = poManager.getLoginPage();
      const productsListPage = poManager.getProductsListPage();
      const cartPage = poManager.getCartPage();
      const checkoutPage = poManager.getCheckoutPage();

      await loginPage.goTo();
      await loginPage.validLogin(data.username, data.password);
      await productsListPage.productsAdd(data.productName1, data.productName2);
      await cartPage.checkOut();
      await checkoutPage.orderPlace();

   });
}

//Parameterization using fixture
/*customTest(`playwright test: End to End scenario`, async ({ page, testDataForOrder}) => //annonimous function means function not having any name
{
   for (const data of testDataForOrder) {
      const poManager = new POmanager(page);
      const loginPage = poManager.getLoginPage();
      const productsListPage = poManager.getProductsListPage();
      const cartPage = poManager.getCartPage();
      const checkoutPage = poManager.getCheckoutPage();

      await loginPage.goTo();
      await loginPage.validLogin(data.username, data.password);
      await productsListPage.productsAdd(data.productName1, data.productName2);
      await cartPage.checkOut();
      await orderPlacePage.orderPlace();
   }

});*/

