import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  retries: 1, // Retry failing tests once
  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' }
    },
    {
      name: 'Mobile Safari',
      use: { browserName: 'webkit', viewport: { width: 375, height: 667 } }
    }
  ],
  outputDir: 'test-results/',
  testDir: 'tests/'
};

export default config;