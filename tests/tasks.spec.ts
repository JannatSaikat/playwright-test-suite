import { test } from '@playwright/test';
import { login, navigateToSection, verifyTask } from '../utils/helpers';
import scenarios from './testScenarios.json'; // Ensure your tsconfig.json allows JSON imports

test.describe('Project Task Management Tests', () => {
  scenarios.forEach(scenario => {
    test(`Verify task in '${scenario.section}': ${scenario.task}`, async ({ page }) => {
      await login(page);
      await navigateToSection(page, scenario.section);
      await verifyTask(page, scenario.task, scenario.status, scenario.tags);
    });
  });
});