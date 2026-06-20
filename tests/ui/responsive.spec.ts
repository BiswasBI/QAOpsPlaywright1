// tests/ui/responsive.spec.ts

import { test, expect } from '@playwright/test';

test('Mobile viewport',
async ({ page }) => {

  await page.setViewportSize({
    width: 390,
    height: 844
  });

  await page.goto('/app/products');

  await expect(
    page.locator('body')
  ).toBeVisible();
});