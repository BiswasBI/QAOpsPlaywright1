const { test, expect } = require('@playwright/test');

test('HTTP GET request using Playwright request fixture', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  // Assert response status and basic success
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Parse and log the response body
  const responseBody = await response.json();
  console.log('Response body:', responseBody);

  // Assert expected fields in the JSON response
  expect(responseBody).toHaveProperty('id', 1);
  expect(responseBody).toHaveProperty('userId');
  expect(responseBody).toHaveProperty('title');
});
