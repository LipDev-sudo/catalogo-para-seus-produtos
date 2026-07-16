import { chromium } from '@playwright/test';

const browser = await chromium.launch();

for (const viewport of [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    for (let position = 0; position < document.body.scrollHeight; position += window.innerHeight) {
      window.scrollTo(0, position);
      await new Promise((resolve) => window.setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.screenshot({ path: `public/images/pratele-${viewport.name}.png`, fullPage: true });
  await page.close();
}

await browser.close();
