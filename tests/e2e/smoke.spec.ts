import { test, expect } from '@playwright/test';

test('login -> add produce -> checkout page opens', async ({ page }) => { await page.goto('/login'); await expect(page.locator('h1')).toContainText('Login'); await page.goto('/dashboard/produce/checkout'); await expect(page.locator('text=Produce Checkout')).toBeVisible(); });
test('create shipment -> tracking page renders', async ({ page }) => { await page.goto('/track/ZEC-0001'); await expect(page.locator('text=Tracking ZEC-0001')).toBeVisible(); });
test('create crypto ticket -> appears in dashboard feed placeholder', async ({ page }) => { await page.goto('/dashboard'); await expect(page.locator('text=Crypto ticket pending review')).toBeVisible(); });
