// tests/e2e/purchase-flow.spec.ts

import { test, expect } from '@playwright/test';
import { POmanager } from '../../pageObjectsTS/POmanager';
import dataset from '../../Utils/placeOrderTestData.json' with { type: 'json' };


for (const data of dataset) {
test(`Purchase flow for user: ${data.username}`, async ({ page }) => {


    const poManager = new POmanager(page);
    const loginPage = poManager.getLoginPage();
    const productsListPage = poManager.getProductsListPage();
    const cartPage = poManager.getCartPage();
    const checkoutPage = poManager.getCheckoutPage();

     await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);
   // await productsListPage.navigate();

   // await productsListPage.verifyProductsVisible();

   // await productsListPage.addFirstProductToCart();
   await productsListPage.productsAdd(data.productName1, data.productName2);

  //  await cartPage.navigate();

   // await cartPage.verifyCartNotEmpty();

  //  await cartPage.proceedToCheckout();

   // await checkoutPage.fillCheckoutForm();

  //  await checkoutPage.placeOrder();

  //  await expect(page).toHaveURL(/orders/);
});}