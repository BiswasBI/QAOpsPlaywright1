import { test, expect } from '@playwright/test';

test('Page contains valid heading structure', async ({
  page
}) => {

  await page.goto('/app/products');

  const headings = await page
    .locator('h1,h2,h3,h4,h5,h6')
    .allTextContents();

  expect(headings.length).toBeGreaterThan(0);

  const h1Count =
    await page.locator('h1').count();

  expect(h1Count).toBe(1);
});