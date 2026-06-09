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
      name: 'firefox-desktop',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'on',
        trace: 'retain-on-failure',
         ...devices['Desktop Firefox']
      }
    },
    {
      name: 'firefox-mobile',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'on',
        trace: 'retain-on-failure',
        ...devices['samsung Galaxy S20']
      }
    },
     {
      name: 'firefox-tablet',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'on',
        trace: 'retain-on-failure',
        ...devices['iPad']
      }
    },
    {
      name: 'safari-desktop',
      use: {
      browserName: 'webkit',
      headless: true,
      screenshot: 'on',
      trace: 'retain-on-failure',
      ...devices['Desktop safari'],
    }
  },
   {
      name: 'safari-mobile',
      use: {
      browserName: 'webkit',
      headless: true,
      screenshot: 'on',
      trace: 'retain-on-failure',
      ...devices['samsung Galaxy S20']
    }
  },
   {
      name: 'safari-tablet',
      use: {
      browserName: 'webkit',
      headless: true,
      screenshot: 'on',
      trace: 'retain-on-failure',
      ...devices['iPad']
    }
  },
  {
      name: 'chrome-desktop',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        permissions:['geolocation'],
        trace: 'retain-on-failure',
        ...devices['Desktop Chrome']
       // viewport: {width:720,height:720}
      }
    },
      {
      name: 'chrome-mobile',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        permissions:['geolocation'],
        trace: 'retain-on-failure',
        ...devices['samsung Galaxy S20']
       // viewport: {width:720,height:720}
      }
    },
      {
      name: 'chrome-tablet',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        permissions:['geolocation'],
        trace: 'retain-on-failure',
        ...devices['iPad']
       // viewport: {width:720,height:720}
      }
    }

]
 
  
});

module.exports=config //export to avail across the project

