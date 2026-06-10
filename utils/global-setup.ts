import { FullConfig, chromium } from '@playwright/test';

async function cookiesSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;

  if (!baseURL) {
    throw Error('Base URL missing!');
  }
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(baseURL);
  await page.locator("[id='onetrust-accept-btn-handler']").click();

  const appModal = page.locator('rt-app-modal-content');
  try {
    await appModal.waitFor({ state: 'visible', timeout: 5000 });
    await appModal.locator('[data-rtappmanager="btnContinue:click"]').click();
    await appModal.waitFor({ state: 'hidden' });
  } catch {
    // modal not present
  }

  await page.context().storageState({ path: storageState as string });
  await page.close();
}

export default cookiesSetup;
