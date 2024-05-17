import { Page, Locator, expect } from '@playwright/test';

class DetailsPage {
  page: Page;
  movieTitleHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.movieTitleHeader = page.locator("[slot='titleIntro']");
  }

  public assert = {
    titleIs: async (movieTitleValue: string) => {
      await expect(this.movieTitleHeader).toHaveText(movieTitleValue);
    },
  };
}

export default DetailsPage;
