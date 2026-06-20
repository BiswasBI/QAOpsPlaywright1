const { test, expect, request } = require('@playwright/test')
const { APiUtils } = require('../Utils/APiUtils.js');
const loginPayload = { userEmail: "arpitabkeya25@gmail.com", userPassword: "test1234" }; //storing json dada as javascript object
let token;
let apiUtils;
test.beforeAll(async () => {
   const apiContext = await request.newContext();
   apiUtils = new APiUtils(apiContext, loginPayload);
   token = await apiUtils.getToken();

});



test('playwright test: End to End scenario', async ({ page }) => //annonimous function means function not having any name
{


   await page.addInitScript(value => {
      window.localStorage.setItem('token', value);

   }, token);


   /*await page.goto("https://www.passthenote.com/auth/login");
  console.log(await page.title());
  await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");
  const email="tester@passthenote.com";
  await page.locator('#email').fill(email);
  await page.locator("[type='password']").fill('Tester@123');
  await page.locator("[type='submit']").click();
  await page.waitForLoadState('networkidle');*/

   await page.goto("https://rahulshettyacademy.com/client");
   //await page.pause();
   /* const products= page.locator('[data-testid*="product"]');
    const productTitle= page.locator('[data-testid*="product"] h3');
    const productName='Bluetooth Headphones';
    const productName2='Desk Lamp LED';
    await page.locator('text=Applicatio').hover();
    await page.locator('text=E-Commer').click();
    await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });
    //await page.waitForLoadState('networkidle');  
    await productTitle.first().waitFor(); //-it will not work because of multiple elements
    const allTitles=await productTitle.allTextContents(); //- it will not show exceotion if element not loaded because it return an array, just return blank array list
    console.log(allTitles);
    const count=await products.count();
    let addedCount = 0;
    for(let i=0;i<count;++i)
    {
       const text = await productTitle.nth(i).textContent();
       if(text === productName || text === productName2)
       {
          console.log('product item is matched');
          await products.nth(i).locator("text=Add to Cart").click();
          console.log('product '+(i+1)+' is added to cart');
          addedCount++;
          if(addedCount===2)
          {
                break;
          }
       
       }
    }
    await page.reload(); //due to empty cart page need to refresh
    await page.getByText('Cart', { exact: true }).nth(0).click();
    await page.locator('[data-testid="ptn-cart-item"]').first().waitFor(); 
    //isVisible() -this method not support wait, so explicitly added wait here
    //only first element is checking loaded or not as all elements are laoded at a time
    const bool=await page.locator('h3:has-text("Bluetooth Headphones")').isVisible();
    expect(bool).toBeTruthy();
    await page.locator('button:has-text("Proceed to Checkout")').click();
    await page.locator('#email').fill('a123@a.com');
    await page.locator('#phone').fill('+33123456789');
    await page.locator('select#country').selectOption('France');
    await page.locator('#addressLine1').fill('test adr1');
    await page.locator('#addressLine2').fill('test adr2');
    await page.locator('#city').fill('paris'); 
    await page.locator('#state').fill('abcd');
    await page.locator('#postalCode').fill('70123');
    await page.locator('button:has-text("Place Order")').click();
    await expect(await page.locator('h3:has-text("Order placed successfully!")')).toBeVisible();
    //await page.pause(); 
    const rows=await page.locator('tbody tr');
    await expect(rows.first()).toBeVisible();
    console.log("row count="+await rows.count());
    const rowcount=await rows.count();
     
    for(let i=1;i<rowcount;++i)
    {
       const orderid=await rows.nth(i).locator('button').textContent();
       const proce=
       console.log("orderid="+orderid);
    }
    //await page.pause();
    //await rows.first().locator('button').click();
    */
});
