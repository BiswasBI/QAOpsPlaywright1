// tests/ui/products-ui.spec.ts

import { test, expect } from '@playwright/test';
import { POmanager } from '../../pageObjectsTS/POmanager';

test('Product cards render correctly',
    async ({ page }) => {

        const poManager = new POmanager(page);
        const loginPage = poManager.getLoginPage();
        const productsListPage = poManager.getProductsListPage();
         await loginPage.goTo();
    await loginPage.validLogin('', '');

        const cards =
            page.locator('[data-testid="product-card"]');

        await expect(cards.first()).toBeVisible();

        const count = await cards.count();

        expect(count).toBeGreaterThan(0);
    });