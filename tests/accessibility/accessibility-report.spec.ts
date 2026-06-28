import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';

test('Generate accessibility report', async ({
  page
}) => {

  await page.goto('/app/products');

  const results =
    await new AxeBuilder({ page })
      .analyze();

  fs.writeFileSync(
    'a11y-report.json',
    JSON.stringify(results, null, 2)
  );
});