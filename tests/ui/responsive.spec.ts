// tests/ui/responsive.spec.ts

import { test, expect } from '@playwright/test';
import { POmanager } from '../../pageObjectsTS/POmanager';

test('Mobile viewport',
  async ({ page }) => {

    await page.setViewportSize({
      width: 390,
      height: 844
    });
    const poManager = new POmanager(page);
    const loginPage = poManager.getLoginPage();
     const productsListPage = poManager.getProductsListPage();
    await loginPage.goTo();
    await loginPage.validLogin('tester@passthenote.com', 'Tester@123');  
    await productsListPage.navigateToProductsPage();
await productsListPage.productVisiblity();
    /*await expect(
      page.locator('body')
    ).toBeVisible();*/
  });