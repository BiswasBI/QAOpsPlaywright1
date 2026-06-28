// tests/accessibility/accessibility.spec.ts

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Products page accessibility scan',
async ({ page }) => {

  await page.goto('/app/products');

  const results = await new AxeBuilder({
    page
  }).analyze();

  expect(results.violations).toEqual([]);
});