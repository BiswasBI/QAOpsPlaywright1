import { test, expect, Locator, Page } from '@playwright/test'

export class CheckoutPage {

   readonly email: Locator;
   readonly phone: Locator;
   readonly country: Locator;
   readonly addr1: Locator;
   readonly addr2: Locator;
   readonly city: Locator;
   readonly state: Locator;
   readonly postalcode: Locator;
   readonly placeOrderBtn: Locator;
   readonly orderPlaceSuccessfullMsg: Locator;
   readonly row: Locator;

   constructor(page: Page) {
      this.email = page.locator('#email');
      this.phone = page.locator('#phone');
      this.country = page.locator('select#country');
      this.addr1 = page.locator('#addressLine1');
      this.addr2 = page.locator('#addressLine2');
      this.city = page.locator('#city');
      this.state = page.locator('#state');
      this.postalcode = page.locator('#postalCode');
      this.placeOrderBtn = page.locator('button:has-text("Place Order")');
      this.orderPlaceSuccessfullMsg = page.locator('h3:has-text("Order placed successfully!")');
      this.row = page.locator('tbody tr');
      //await page.pause(); 

   }

   async orderPlace() {
      await this.email.fill('a123@a.com');
      await this.phone.fill('+33123456789');
      await this.country.selectOption('France');
      await this.addr1.fill('test adr1');
      await this.addr2.fill('test adr2');
      await this.city.fill('paris');
      await this.state.fill('abcd');
      await this.postalcode.fill('70123');
      await this.placeOrderBtn.click();
      await expect(this.orderPlaceSuccessfullMsg).toBeVisible();
      //await page.pause(); 
      const rows = this.row;
      await expect(rows.first()).toBeVisible();
      const rowcount = await rows.count();
      console.log("row count=" + rowcount);

      for (let i = 1; i < rowcount; ++i) {
         const orderid = await rows.nth(i).locator('button').textContent();
         console.log("orderid=" + orderid);
      }

   }
}

// Use ES module export (TypeScript)
export default CheckoutPage; 