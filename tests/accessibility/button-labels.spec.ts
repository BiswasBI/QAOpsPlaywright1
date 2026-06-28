import { test, expect } from '@playwright/test';

test('Buttons have accessible names', async ({
  page
}) => {

  await page.goto('/app/products');

  const buttons = page.locator('button');

  const count = await buttons.count();

  for (let i = 0; i < count; i++) {

    const text =
      await buttons.nth(i).textContent();

    const ariaLabel =
      await buttons.nth(i)
        .getAttribute('aria-label');

    expect(
      text?.trim() || ariaLabel
    ).toBeTruthy();
  }
});