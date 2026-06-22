const {test,expect}=require('@playwright/test');

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
console.log(await page.title());
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
expect(message).toContain('Please fill in this field');

});

test('playwright test: Valid Login', async ({page})=> //annonimous function means function not having any name
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
   console.log(await page.title());
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
   await page.goto("https://www.passthenote.com/auth/login");
   console.log(await page.title());
   await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");

   await page.getByPlaceholder("you@example.com").fill(email);
   await page.getByPlaceholder("Enter your password").fill('Tester@123');
   await page.getByRole("button",{name: "Sign In"}).click();
   await page.getByRole("button",{name: "Applications", exact: false}).hover();
   await page.getByRole("link",{name: "E-Commerce", exact: false}).click();
   await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });

   await page.waitForLoadState('networkidle');
   await productTitle.first().waitFor(); //-it will not work because of multiple elements

   await page.locator('div.p-5', {
  has: page.locator('h3', { hasText: productName })
}).getByRole('button', { name: /Add to Cart/i }).click();

await page.getByText(productName).getByRole("button",{name:"Add to Cart"}).click();
  /* const allTitles=await productTitle.allTextContents(); //- it will not show exceotion if element not loaded because it return an array, just return blank array list
   console.log(allTitles);
   const count=await products.count();
   for(let i=0;i<count;++i)
   {
      if(await productTitle.nth(i).textContent()===productName)
      {
         console.log('product item is matched');
         await products.nth(i).locator("text=Add to Cart").click();
         console.log('product added to cart');
         break;
      }
   }*/
   await page.reload(); //due to empty cart page need to refresh
   await page.getByText('Cart', { exact: true }).nth(0).click();
   await page.locator('[data-testid="ptn-cart-item"]').first().waitFor(); 
   //isVisible() -this method not support wait, so explicitly added wait here
   //only first element is checking loaded or not as all elements are loaded at a time
   const bool=await page.getByText("Laptop Stand").isVisible();
   await page.pause();
   expect(bool).toBeTruthy();
   await page.getByText("Proceed to Checkout").click();
   await page.pause();
});
