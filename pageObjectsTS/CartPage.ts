import { test, expect, Locator, Page } from '@playwright/test'

export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly targetItem: Locator;
    readonly checkoutButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.cartItems = page.locator('[data-testid="ptn-cart-item"]');
        //isVisible() -this method not support wait, so explicitly added wait here
        //only first element is checking loaded or not as all elements are laoded at a time
        this.targetItem = page.locator('h3[data-testid="ptn-cart-item-name"]').first();
        this.checkoutButton = page.locator('button:has-text("Proceed to Checkout")');
    }

    async checkOut() {
        await this.cartItems.first().waitFor();
        //isVisible() -this method not support wait, so explicitly added wait here
        //only first element is checking loaded or not as all elements are laoded at a time
        const bool = await this.targetItem.isVisible();
        await expect(bool).toBeTruthy();
        await this.checkoutButton.click();
    }
}

export default CartPage;