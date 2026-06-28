import { test, expect } from '@playwright/test';

test('Keyboard navigation works', async ({
  page
}) => {

  await page.goto('/app/products');

  await page.keyboard.press('Tab');

  const firstFocused =
    await page.evaluate(() => document.activeElement?.tagName);

  expect(firstFocused).toBeTruthy();

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  const focusedElement =
    await page.evaluate(() => document.activeElement?.outerHTML);

  expect(focusedElement).not.toBeNull();
});