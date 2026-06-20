
import { test, expect } from '@playwright/test';

test('Products API returns valid data',
async ({ request }) => {

  const response = await request.get(
    'https://passthenote-backend-juod.onrender.com/api/v1/cart'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBeTruthy();

  expect(body[0]).toHaveProperty('id');
  expect(body[0]).toHaveProperty('name');
  expect(body[0]).toHaveProperty('price');
});