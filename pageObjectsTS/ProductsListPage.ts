import { test, expect, Locator, Page } from '@playwright/test'

export class ProductsListPage {

   readonly page: Page;
   readonly menu: Locator;
   readonly menuOpton: Locator;

   constructor(page: Page) {
      this.page = page;

      this.menu = page.locator('text=Applicatio')
      this.menuOpton = page.locator('text=E-Commer');

   }

  async navigate() {
    await this.page.goto('/app/products');
  }

  async addFirstProductToCart() {
    await this.page.locator('button').filter({
      hasText: /add to cart/i
    }).first().click();
  }

  async verifyProductsVisible() {
    await expect(
      this.page.locator('[data-testid="product-card"]')
    ).not.toHaveCount(0);
  }

   async productsAdd(productName1: string, productName2: string) {
      const products = this.page.locator('[data-testid*="product"]');
      const productTitle = this.page.locator('[data-testid*="product"] h3');
      await this.menu.hover();
      await this.menuOpton.click();
      //await this.page.pause();
      await expect(this.page).toHaveURL("https://www.passthenote.com/app/products");
      await this.page.waitForLoadState('networkidle');
      await productTitle.first().waitFor(); //-it will not work because of multiple elements

      const allTitles = await productTitle.allTextContents(); //- it will not show exceotion if element not loaded because it return an array, just return blank array list
      console.log(allTitles);
      const count = await products.count();
      let addedCount = 0;
      for (let i = 0; i < count; ++i) {
         let text: any;
         text = await productTitle.nth(i).textContent();
         if (text === productName1 || text === productName2) {
            console.log('product item is matched');
            await products.nth(i).locator("text=Add to Cart").click();
            addedCount++;
            console.log('Product' + addedCount + ' is added to cart');

            if (addedCount === 2) {
               break;
            }

         }
      }
      await this.page.reload(); //due to empty cart page need to refresh
      await this.page.getByText('Cart', { exact: true }).nth(0).click();
   }

}

export default ProductsListPage;