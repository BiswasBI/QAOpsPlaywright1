// tests/api/orders-api.spec.ts

import { test, expect } from '@playwright/test';

test('Orders API schema validation',
async ({ request }) => {

  const response =
    await request.get(
      'https://www.passthenote.com/api/orders'
    );

  expect(response.ok()).toBeTruthy();

  const orders = await response.json();

  expect(orders.length).toBeGreaterThan(0);

  expect(orders[0]).toHaveProperty('id');
  expect(orders[0]).toHaveProperty('status');
  expect(orders[0]).toHaveProperty('total');
});