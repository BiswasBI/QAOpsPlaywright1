// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { workers } from 'node:cluster';
import { trace } from 'node:console';
import { permission } from 'node:process';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=defineConfig({

  testDir: './tests',
  retries: 1, 
 // workers: 3,
  timeout: 40*1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',
  fullyParallel: true,
  projects: [
    {
      name: 'firefox',
      use: {
      browserName: 'firefox',
      headless: true,
      screenshot: 'on',
      trace: 'retain-on-failure'
    }
  },
   /* {
      name: 'safari',
      use: {
      browserName: 'webkit',
      headless: true,
      screenshot: 'on',
      trace: 'retain-on-failure',
      ...devices['iPhone 11']
    }
  },*/
  {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        permissions:['geolocation'],
        trace: 'retain-on-failure',
       // viewport: {width:720,height:720}
   }
    
  }

]
 
  
});

module.exports=config //export to avail across the project

