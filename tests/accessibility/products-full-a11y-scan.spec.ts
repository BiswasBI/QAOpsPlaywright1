/// <reference types="node" />
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';

test('Products accessibility scan', async ({ page }) => {
  await page.goto('https://www.passthenote.com/app/products');

  const results = await new AxeBuilder({ page }).analyze();

  fs.writeFileSync(
    'axe-results.json',
    JSON.stringify(results, null, 2)
  );

  console.log(`Found ${results.violations.length} violations`);
  //To Fail
  //expect(results.violations).toEqual([]);

}); 