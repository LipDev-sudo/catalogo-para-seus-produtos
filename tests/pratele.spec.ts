import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('presents and filters the demonstrative catalog without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Seu trabalho à vista.' })).toBeVisible();
  await expect(page.getByText('6 peças encontradas')).toBeVisible();

  const search = page.getByRole('searchbox', { name: 'Buscar no catálogo' }).filter({ visible: true });
  await search.fill('xicara');
  await expect(page.getByText('1 peça encontrada')).toBeVisible();
  await expect(page.getByRole('heading', { level: 3, name: 'Xícara Serra' })).toBeVisible();

  const inquiry = page.getByRole('link', { name: 'Consultar esta peça' });
  await expect(inquiry).toHaveAttribute('href', /wa\.me\/\?text=.*X%C3%ADcara%20Serra/);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test('category filters remain keyboard-operable', async ({ page }) => {
  await page.goto('/#catalogo');
  const decoration = page.getByRole('button', { name: 'Decoração' });
  await decoration.focus();
  await expect(decoration).toBeFocused();
  await decoration.press('Enter');
  await expect(decoration).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByText('2 peças encontradas')).toBeVisible();
});

test('has no serious or critical automated accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  const blockingViolations = results.violations.filter(({ impact }) => impact === 'serious' || impact === 'critical');

  expect(blockingViolations).toEqual([]);
});
