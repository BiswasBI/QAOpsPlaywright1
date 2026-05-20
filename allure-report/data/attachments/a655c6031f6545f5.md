# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PassthenoteTest.spec.js >> @web playwright test: Valid Login
- Location: tests\PassthenoteTest.spec.js:41:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "PassTheNote – Learn Test Automation Without Building Apps | Free Practice Sit"
Received: "PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × unexpected value "PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Skip to content" [ref=e3] [cursor=pointer]:
      - /url: "#main-content"
    - navigation "Main navigation" [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - link "PassTheNote home" [ref=e8] [cursor=pointer]:
            - /url: /
            - img "PassTheNote" [ref=e10]
            - generic [ref=e19]: PassTheNote
          - generic [ref=e20]:
            - link "Practice" [ref=e21] [cursor=pointer]:
              - /url: /practice-challenges
            - link "Learn" [ref=e22] [cursor=pointer]:
              - /url: /blog
        - generic [ref=e23]:
          - button "Open command palette (press Ctrl or Command + K)" [ref=e24] [cursor=pointer]:
            - img [ref=e25]
            - generic [ref=e27]: Search…
            - generic [ref=e28]: ⌘K
          - switch "Switch to dark mode" [ref=e29] [cursor=pointer]:
            - img [ref=e30]
            - img [ref=e36]
          - generic [ref=e38]: Automation Playground
          - generic [ref=e40]:
            - link "Login" [ref=e41] [cursor=pointer]:
              - /url: /auth/login
            - link "Sign Up" [ref=e42] [cursor=pointer]:
              - /url: /auth/signup
    - main [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - heading "Sign in to PassTheNote" [level=1] [ref=e47]
          - paragraph [ref=e48]: Enter your credentials to continue
        - group [ref=e49]:
          - generic "Demo credentials for testing" [ref=e50] [cursor=pointer]:
            - generic [ref=e51]: Demo credentials for testing
            - img [ref=e52]
        - generic [ref=e54]:
          - generic [ref=e55]:
            - generic [ref=e56]: Email
            - textbox "Email" [ref=e57]:
              - /placeholder: you@example.com
          - generic [ref=e58]:
            - generic [ref=e59]: Password
            - textbox "Password" [ref=e60]:
              - /placeholder: Enter your password
          - link "Forgot password?" [ref=e62] [cursor=pointer]:
            - /url: /auth/forgot-password
          - button "Sign In" [ref=e63] [cursor=pointer]
        - paragraph [ref=e65]:
          - text: Don't have an account?
          - link "Sign up" [ref=e66] [cursor=pointer]:
            - /url: /auth/signup
    - contentinfo [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img "PassTheNote" [ref=e73]
              - generic [ref=e82]: PassTheNote
            - paragraph [ref=e83]: Free Automation Testing Practice Playground for UI & API Engineers.
            - generic [ref=e84]:
              - link "LinkedIn" [ref=e85] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/pallabbhowmik
                - img [ref=e86]
              - link "GitHub" [ref=e88] [cursor=pointer]:
                - /url: https://github.com/pallabbhowmik
                - img [ref=e89]
              - link "YouTube" [ref=e91] [cursor=pointer]:
                - /url: https://www.youtube.com/@SingSongRhymes
                - img [ref=e92]
          - navigation "Footer Resources" [ref=e94]:
            - heading "Resources" [level=3] [ref=e95]
            - list [ref=e96]:
              - listitem [ref=e97]:
                - link "API Documentation" [ref=e98] [cursor=pointer]:
                  - /url: /docs/api
              - listitem [ref=e99]:
                - link "Postman Collection" [ref=e100] [cursor=pointer]:
                  - /url: /docs/postman_collection.json
              - listitem [ref=e101]:
                - link "Test IDs Reference" [ref=e102] [cursor=pointer]:
                  - /url: /docs/test-ids
              - listitem [ref=e103]:
                - link "Practice Challenges" [ref=e104] [cursor=pointer]:
                  - /url: /practice-challenges
          - generic [ref=e105]:
            - heading "Legal" [level=3] [ref=e106]
            - list [ref=e107]:
              - listitem [ref=e108]:
                - link "Privacy Policy" [ref=e109] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e110]:
                - link "Terms of Use" [ref=e111] [cursor=pointer]:
                  - /url: /terms
              - listitem [ref=e112]:
                - link "Report an Issue" [ref=e113] [cursor=pointer]:
                  - /url: /report-issue
          - generic [ref=e114]:
            - heading "Community" [level=3] [ref=e115]
            - list [ref=e116]:
              - listitem [ref=e117]:
                - link "Social Feed" [ref=e118] [cursor=pointer]:
                  - /url: /notes
              - listitem [ref=e119]:
                - link "Share Solutions" [ref=e120] [cursor=pointer]:
                  - /url: /app/share-solution
              - listitem [ref=e121]:
                - link "Blog" [ref=e122] [cursor=pointer]:
                  - /url: /blog
        - generic [ref=e123]:
          - paragraph [ref=e124]: © 2026 PassTheNote. Designed for QA engineers, by QA engineers.
          - paragraph [ref=e125]:
            - text: Built with care by
            - link "Pallab Bhowmik" [ref=e126] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/pallabbhowmik
  - alert [ref=e127]
```

# Test source

```ts
  1   | const {test,expect}=require('@playwright/test');
  2   | test.describe.configure({mode: 'serial'});
  3   | //serial mode: id any test failed rest of the tests will not run
  4   | //use this mode when need to run inter-dependent tests
  5   | 
  6   | test('browser context playwright test', async ({browser})=> //annonimous function means function not having any name
  7   | {
  8   |     const context=await browser.newContext(); //create new browser instance
  9   |     const page=await context.newPage(); //create actual page to automate, hit url here
  10  |     await page.goto("https://www.google.com");
  11  |      console.log(await page.title());
  12  |    await expect(page).toHaveTitle("Google");
  13  | 
  14  | 
  15  | });
  16  | 
  17  | test('@web playwright test: password validation checking', async ({page})=> //annonimous function means function not having any name
  18  | {
  19  |     
  20  | await page.goto("https://www.passthenote.com/auth/login");
  21  | console.log(await page.title());
  22  | await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");
  23  | 
  24  | await page.locator('#email').fill('tester@passthenote.com');
  25  | const password = page.locator('input[type="password"]');
  26  | const userName=await page.locator('#email').inputValue(); 
  27  | //inputValue()>>grab text from input field(when element not attached to the DOM)
  28  | console.log(userName);
  29  | await page.click('button:has-text("Sign In")');
  30  | 
  31  | await password.evaluate(el => el.reportValidity());
  32  | 
  33  | const message = await password.evaluate(el => el.validationMessage);
  34  | console.log(message);
  35  | //expect(message).toContain('Please fill in this field'); 
  36  | //- it is not working in headless mode, getting different msg: "Please fill out this field." instead "Please fill in this field"
  37  | expect(message.toLowerCase()).toMatch(/please fill (in|out) this field/);
  38  | 
  39  | });
  40  | 
  41  | test('@web playwright test: Valid Login', async ({page})=> 
  42  | {
  43  |     
  44  |    await page.goto("https://www.passthenote.com/auth/login");
  45  |    console.log(await page.title());
> 46  |    await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Sit");
      |                       ^ Error: expect(page).toHaveTitle(expected) failed
  47  | 
  48  |    await page.locator('#email').fill('tester@passthenote.com');
  49  |    await page.locator("[type='password']").fill('Tester@123');
  50  |    await page.locator("[type='submit']").click();
  51  |    
  52  | 
  53  | });
  54  | 
  55  | 
  56  | test('playwright test: Navigates to Products', async ({page})=> //annonimous function means function not having any name
  57  | {
  58  |    const cartTitles= page.locator('[data-testid*="product"] h3');
  59  |    await page.goto("https://www.passthenote.com/auth/login");
  60  |    console.log(await page.title());
  61  |    await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");
  62  | 
  63  |    await page.locator('#email').fill('tester@passthenote.com');
  64  |    await page.locator("[type='password']").fill('Tester@123');
  65  |    await page.locator("[type='submit']").click();
  66  |    await page.locator('text=Applicatio').hover();
  67  |    await page.locator('text=E-Commer').click();
  68  |    await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });
  69  | 
  70  |    //console.log(await cartTitles.first().textContent());
  71  |    //console.log(await cartTitles.nth(2).textContent());
  72  |    //await page.waitForLoadState('networkidle');
  73  |    //await cartTitles.waitFor(); -it will not work because of multiple elements
  74  |    await cartTitles.first().waitFor();
  75  |    const allTitles=await cartTitles.allTextContents(); //- it will not show exceotion if element not loaded because it return an array, just return blank array list
  76  |    console.log(allTitles);
  77  | });
  78  | 
  79  | test('playwright test: Products: Drodpdown selection', async ({page})=> //annonimous function means function not having any name
  80  | {
  81  |    const cartTitles= page.locator('[data-testid*="product"] h3');
  82  |    await page.goto("https://www.passthenote.com/auth/login");
  83  |    console.log(await page.title());
  84  |    await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");
  85  | 
  86  |    await page.locator('#email').fill('tester@passthenote.com');
  87  |    await page.locator("[type='password']").fill('Tester@123');
  88  |    await page.locator("[type='submit']").click();
  89  |    await page.locator('text=Applicatio').hover();
  90  |    await page.locator('text=E-Commer').click();
  91  |    await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });
  92  | 
  93  |    const dropdown=page.locator('select#sort-by');
  94  |    await dropdown.selectOption('price-high');
  95  |    //await page.pause(); - this will pause to debug
  96  | });
  97  | 
  98  | test('playwright test: End to End scenario', async ({page})=> //annonimous function means function not having any name
  99  | {
  100 |    const products= page.locator('[data-testid*="product"]');
  101 |    const productTitle= page.locator('[data-testid*="product"] h3');
  102 |    const email="tester@passthenote.com";
  103 |    const productName='Bluetooth Headphones';
  104 |    const productName2='Desk Lamp LED';
  105 |    await page.goto("https://www.passthenote.com/auth/login");
  106 |    console.log(await page.title());
  107 |    await expect(page).toHaveTitle("PassTheNote – Learn Test Automation Without Building Apps | Free Practice Site");
  108 | 
  109 |    await page.locator('#email').fill(email);
  110 |    await page.locator("[type='password']").fill('Tester@123');
  111 |    await page.locator("[type='submit']").click();
  112 |    await page.locator('text=Applicatio').hover();
  113 |    await page.locator('text=E-Commer').click();
  114 |    await expect(page).toHaveURL("https://www.passthenote.com/app/products",{ timeout: 10000 });
  115 | 
  116 |    await page.waitForLoadState('networkidle');
  117 |    await productTitle.first().waitFor(); //-it will not work because of multiple elements
  118 |    const allTitles=await productTitle.allTextContents(); //- it will not show exceotion if element not loaded because it return an array, just return blank array list
  119 |    console.log(allTitles);
  120 |    const count=await products.count();
  121 |    let addedCount = 0;
  122 |    for(let i=0;i<count;++i)
  123 |    {
  124 |       const text = await productTitle.nth(i).textContent();
  125 |       if(text === productName || text === productName2)
  126 |       {
  127 |          console.log('product item is matched');
  128 |          await products.nth(i).locator("text=Add to Cart").click();
  129 |          console.log('product '+(i+1)+' is added to cart');
  130 |          addedCount++;
  131 |          if(addedCount===2)
  132 |          {
  133 |                break;
  134 |          }
  135 |       
  136 |       }
  137 |    }
  138 |    await page.reload(); //due to empty cart page need to refresh
  139 |    await page.getByText('Cart', { exact: true }).nth(0).click();
  140 |    await page.locator('[data-testid="ptn-cart-item"]').first().waitFor(); 
  141 |    //isVisible() -this method not support wait, so explicitly added wait here
  142 |    //only first element is checking loaded or not as all elements are laoded at a time
  143 |    const bool=await page.locator('h3:has-text("Bluetooth Headphones")').isVisible();
  144 |    expect(bool).toBeTruthy();
  145 |    await page.locator('button:has-text("Proceed to Checkout")').click();
  146 |    await page.locator('#email').fill('a123@a.com');
```