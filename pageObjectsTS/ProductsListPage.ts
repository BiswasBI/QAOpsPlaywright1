import { test, expect, Locator, Page } from '@playwright/test'

export class ProductsListPage {

   readonly page: Page;
   readonly menu: Locator;
   readonly menuOpton: Locator;
   readonly productCards: Locator;

   constructor(page: Page) {
      this.page = page;
      this.menu = page.locator('text=Applicatio')
      this.menuOpton = page.locator('text=E-Commer');
      this.productCards = page.locator('[data-testid*="product"]');

   }


   async navigateToProductsPage() {
      await this.menu.hover();
      await this.menuOpton.click();
      await expect(this.page).toHaveURL("https://www.passthenote.com/app/products");
      await this.page.waitForLoadState('networkidle');
   }

   async addFirstProductToCart() {
      await this.page.locator('button').filter({
         hasText: /add to cart/i
      }).first().click();
   }

   async verifyProductsVisible() {
      await expect(
         this.productCards
      ).not.toHaveCount(0);
   }

   async productVisiblity() {
      //await this.menu.hover();
      //await this.menuOpton.click();
      //await this.page.pause();
      //await expect(this.page).toHaveURL("https://www.passthenote.com/app/products");
      //await this.page.waitForLoadState('networkidle');
      const cards = this.productCards;
      //await expect(cards).toBeVisible(); //here it expecting single element, but we have multiple elements, so it will not work, so we need to use count to verify the visibility of all elements, if count is greater than 0 then it means all elements are visible, if count is 0 then it means all elements are not visible, so we need to use count to verify the visibility of all elements.
      const count = await cards.count();
      console.log('Total product count is: ' + count);
      await expect(count).toBeGreaterThan(0); //need await , otherwise return 0 elemts due to typesctip asynchronous behaviour, it will not wait for count and return 0, so need to await to get actual count value. if we not use await then it will not show exception because of 0 count, but if we use await then it will show exception because of 0 count. so need to use await to get actual count value and show exception if count is 0.

   }

   async productsAdd(productName1: string, productName2: string) {
      const products = this.page.locator('[data-testid*="product"]');
      const productTitle = this.page.locator('[data-testid*="product"] h3');
      await this.menu.hover();
      await this.menuOpton.click();
      //await this.page.pause();
      await expect(this.page).toHaveURL("https://www.passthenote.com/app/products");
      await this.page.waitForLoadState('networkidle');
     //await productTitle.first().waitFor(); //-it will not work because of multiple elements

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