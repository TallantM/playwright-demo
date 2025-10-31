import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 2,
  reporter: 'html',
  use: { baseURL: 'https://the-internet.herokuapp.com' },
  projects: [ { name: 'chromium', use: { ...devices['Desktop Chrome'] } } ]
});