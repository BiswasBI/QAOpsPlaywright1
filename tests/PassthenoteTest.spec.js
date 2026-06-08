const {test,expect}=require('@playwright/test');
test.describe.configure({mode: 'parallel'});
//serial mode: id any test failed rest of the tests will not run
//use this mode when need to run inter-dependent tests

test('browser context playwright test', async ({browser})=> //annonimous function means function not having any name
{
    const context=await browser.newContext(); //create new browser instance
    const page=await context.newPage(); //create actual page to automate, hit url here
    await page.goto("https://www.google.com");
     console.log(await page.title());
   await expect(page).toHaveTitle("Google");


});

test('playwright test: password validation checking', async ({page})=> //annonimous function means function not having any name
{
    
await page.goto("https://www.passthenote.com/auth/login");
//console.log(await page.title());
await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");

await page.locator('#email').fill('tester@passthenote.com');
const password = page.locator('input[type="password"]');
const userName=await page.locator('#email').inputValue(); 
//inputValue()>>grab text from input field(when element not attached to the DOM)
console.log(userName);
await page.click('button:has-text("Sign In")');
await password.evaluate(el => el.reportValidity());

const message = await password.evaluate(el => el.validationMessage);
console.log(message);
//expect(message).toContain('Please fill in this field'); 
//- it is not working in headless mode, getting different msg: "Please fill out this field." instead "Please fill in this field"
expect(message.toLowerCase()).toMatch(/please fill (in|out) this field/);

});

test('playwright test: Valid Login', async ({page})=> 
{
    
   await page.goto("https://www.passthenote.com/auth/login");
   console.log(await page.title());
   await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");

   await page.locator('#email').fill('tester@passthenote.com');
   await page.locator("[type='password']").fill('Tester@123');
   await page.locator("[type='submit']").click();
   

});


test('playwright test: Navigates to Products', async ({page})=> //annonimous function means function not having any name
{
   const cartTitles= page.locator('[data-testid*="product"] h3');
   await page.goto("https://www.passthenote.com/auth/login");
   //console.log(await page.title());
   await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");

   await page.locator('#email').fill('tester@passthenote.com');
   await page.locator("[type='password']").fill('Tester@123');
   await page.locator("[type='submit']").click();
   await page.locator('text=Applicatio').hover();
   await page.locator('text=E-Commer').click();
   await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });

   //console.log(await cartTitles.first().textContent());
   //console.log(await cartTitles.nth(2).textContent());
   //await page.waitForLoadState('networkidle');
   //await cartTitles.waitFor(); -it will not work because of multiple elements
   await cartTitles.first().waitFor();
   const allTitles=await cartTitles.allTextContents(); //- it will not show exceotion if element not loaded because it return an array, just return blank array list
   console.log(allTitles);
});

test('playwright test: Products: Drodpdown selection', async ({page})=> //annonimous function means function not having any name
{
   const cartTitles= page.locator('[data-testid*="product"] h3');
   await page.goto("https://www.passthenote.com/auth/login");
   console.log(await page.title());
   await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");

   await page.locator('#email').fill('tester@passthenote.com');
   await page.locator("[type='password']").fill('Tester@123');
   await page.locator("[type='submit']").click();
   await page.locator('text=Applicatio').hover();
   await page.locator('text=E-Commer').click();
   await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });

   const dropdown=page.locator('select#sort-by');
   await dropdown.selectOption('price-high');
   //await page.pause(); - this will pause to debug
});

test('playwright test: End to End scenario', async ({page})=> //annonimous function means function not having any name
{
   const products= page.locator('[data-testid*="product"]');
   const productTitle= page.locator('[data-testid*="product"] h3');
   const email="tester@passthenote.com";
   const productName='Bluetooth Headphones';
   const productName2='Desk Lamp LED';
   await page.goto("https://www.passthenote.com/auth/login");
   console.log(await page.title());
   await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");

   await page.locator('#email').fill(email);
   await page.locator("[type='password']").fill('Tester@123');
   await page.locator("[type='submit']").click();
   await page.locator('text=Applicatio').hover();
   await page.locator('text=E-Commer').click();
   await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });

   await page.waitForLoadState('networkidle');
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
   
});
