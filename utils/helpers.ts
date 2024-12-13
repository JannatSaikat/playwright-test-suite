import { Page, expect } from '@playwright/test';

export async function login(page: Page): Promise<void> {
  await page.goto('/');
  await page.fill('input[id="username"]', 'admin');
  await page.fill('input[id="password"]', 'password123');
  await page.click('button[type="submit"]');
  await page.waitForSelector('#root');
}

export async function navigateToSection(page: Page, sectionName: string): Promise<void> {
  await page.click(`text=${sectionName}`);
  await page.waitForSelector(`h1:has-text("${sectionName}")`);
}

export async function verifyTask(
  page: Page,
  taskName: string,
  status: string,
  tags: string[]
): Promise<void> {
  const section = page.locator(`div h2:has-text("${status}")`);
  await expect(section).toBeVisible();

  const task = page.locator(`h3:has-text("${taskName}")`);
  await expect(task).toBeVisible();

  const tagLocator = task.locator('xpath=../div[1]');
  tags.forEach(async tag => {
    await expect(tagLocator).toContainText(tag);
  });

  const parentLocator = task.locator('xpath=../../..');
  await expect(parentLocator).toContainText(status);
}