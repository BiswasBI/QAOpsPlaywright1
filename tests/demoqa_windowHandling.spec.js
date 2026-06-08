const {test,expect}=require('@playwright/test');

test('@web playwright test: Child window handling', async ({browser})=> //annonimous function means function not having any name
{
const context=await browser.newContext();  //open a browser then on that create a new context or new session or new window
const page=await context.newPage();   //create new page on that session
await page.goto("https://demoqa.com/browser-windows");
const newWindowBtn=await page.locator('#tabButton');
 //Promise.all()- it required when set of steps needs to be parellaly go 
// and wait until these steps are successfully completed - its array of promises
//javascript return peomise: status: pending, rejected, fullfilled
const [newPage]= await Promise.all(
[
    context.waitForEvent('page'), //listen new page on original context
    newWindowBtn.click(), //new page is opened
  
   //- these two steps should go parally means asynhchronously, 
   // all these array of promises should be "fulfilled)"
   //const [newPage, newpage2]= await Promise.all ->this array because it can open more than one page
])

const  text=await newPage.locator('#sampleHeading').textContent();
console.log(text);

});



