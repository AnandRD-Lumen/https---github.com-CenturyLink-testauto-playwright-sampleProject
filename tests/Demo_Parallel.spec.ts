import { test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('runs in parallel 1', async ({ page }) => { /* ... */ });
test('runs in parallel 2', async ({ page }) => { /* ... */ });
test('runs in parallel 3', async ({ page }) => { /* ... */ });
test('runs in parallel 4', async ({ page }) => { /* ... */ });
test('runs in parallel 5', async ({ page }) => { /* ... */ });
test('runs in parallel 6', async ({ page }) => { /* ... */ });
test('runs in parallel 7', async ({ page }) => { /* ... */ });
test('runs in parallel 8', async ({ page }) => { /* ... */ });
test('runs in parallel 9', async ({ page }) => { /* ... */ });
test('runs in parallel 10', async ({ page }) => { /* ... */ });