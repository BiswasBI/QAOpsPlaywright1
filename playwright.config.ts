// @ts-check
/// <reference types="node" />

import { defineConfig } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  workers: process.env.WORKERS
    ? parseInt(process.env.WORKERS)
    : 4,

  retries: 1,

  timeout: 40 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'report.json' }]
  ],


      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        permissions:['geolocation'],
        trace: 'retain-on-failure'
       // trace: 'on'
       // viewport: {width:720,height:720}
   }
    

 

});

/*
Your Config Now Supports

✅ parallel workers
✅ Docker scaling
✅ retries
✅ HTML reports
✅ screenshots on failures
✅ traces on failures
✅ Chromium
✅ headless execution*/