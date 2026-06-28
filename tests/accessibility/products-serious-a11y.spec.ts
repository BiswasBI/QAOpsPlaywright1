import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('No serious accessibility violations', async ({
  page
}) => {

  await page.goto('/app/products');

  const results = await new AxeBuilder({ page })
    .analyze();

  const seriousViolations =
    results.violations.filter(
      violation =>
        violation.impact === 'serious' ||
        violation.impact === 'critical'
    );

  expect(seriousViolations).toEqual([]);
});