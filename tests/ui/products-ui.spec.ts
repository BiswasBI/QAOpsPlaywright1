// tests/ui/products-ui.spec.ts

import { test, expect } from '@playwright/test';
import { POmanager } from '../../pageObjectsTS/POmanager';

test('Product cards render correctly',
    async ({ page }) => {

        const poManager = new POmanager(page);
        const loginPage = poManager.getLoginPage();
        const productsListPage = poManager.getProductsListPage();
        await loginPage.goTo();
        await loginPage.validLogin('tester@passthenote.com', 'Tester@123');
        await productsListPage.navigateToProductsPage();
        await productsListPage.productVisiblity();
    });