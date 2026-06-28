import { test, expect } from '@playwright/test';

test('Main landmark exists', async ({
  page
}) => {

  await page.goto('/app/products');

  const main =
    page.locator('main');

  await expect(main).toBeVisible();
});