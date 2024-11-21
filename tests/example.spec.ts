import { test, expect } from '@playwright/test';

test('basic test with multiple steps', async ({ page }) => {
  test.setTimeout(60000); // Increase the test timeout to 60 seconds

  // Step 1: Navigate to the page
  await page.goto('https://google.com', { timeout: 60000 });
  
  // Step 2: Check the page title
  const title = await page.title();
  expect(title).toContain('Google');

  // Step 3: Wait for search bar and type a search query
  await page.pause(); 

  const searchField = await page.getByLabel('Search', { exact: true });
  await searchField.fill('testing');

          // getByLabel('Search', { exact: true })
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).type("testing");
  await page.waitForTimeout(2000);

        //   getByRole('button', { name: 'Google Search' })
  await page.getByRole('button', { name: 'Google Search' }).first().click({ timeout: 5000 });
  
//   await page.waitForSelector('input[name="q"]', { timeout: 60000 });
//   await page.locator('input[name="q"]').fill('Playwright testing');
  
//   // Step 4: Press "Enter" to search
//   await page.locator('input[name="q"]').press('Enter');
  
//   // Step 5: Wait for the search results page to load
//   await page.waitForSelector('#search');
  
//   // Step 6: Check that the search results contain the expected text
//   const firstResultText = await page.locator('#search').textContent();
//   expect(firstResultText).toContain('Playwright');
  
//   // Step 7: Capture a screenshot of the search results
//   await page.screenshot({ path: 'search_results.png' });
});
