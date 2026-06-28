import { test, expect } from '@playwright/test';

test('Inputs have labels', async ({
  page
}) => {

  await page.goto('/app/products');

  const inputs =
    page.locator('input');

  const count =
    await inputs.count();

  for (let i = 0; i < count; i++) {

    const ariaLabel =
      await inputs.nth(i)
        .getAttribute('aria-label');

    const labelledBy =
      await inputs.nth(i)
        .getAttribute('aria-labelledby');

    const placeholder =
      await inputs.nth(i)
        .getAttribute('placeholder');

    expect(
      ariaLabel ||
      labelledBy ||
      placeholder
    ).toBeTruthy();
  }
});