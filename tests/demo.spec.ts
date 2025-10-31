import { test, expect } from '@playwright/test';

test('login flakiness fix', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash.success')).toContainText('secure');
});