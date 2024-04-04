import { Page, Locator, expect } from '@playwright/test';

class DetailsPage {
  page: Page;
  movieTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.movieTitle = page.locator("[data-qa='score-panel-title']");
  }

  public assert = {
    titleIs: async (movieTitle: string) => {
      await expect(this.movieTitle).toHaveText(movieTitle);
    },
  };
}

export default DetailsPage;
