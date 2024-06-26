import { Page, Locator, expect } from '@playwright/test';

class CelebrityDetailsPage {
  page: Page;
  celebrityTitle: Locator;
  highestRatedMovie: Locator;

  constructor(page: Page) {
    this.page = page;
    this.celebrityTitle = page.locator("[data-qa='celebrity-bio-header']");
    this.highestRatedMovie = page.locator('[data-qa="dynamic-poster-list"]').locator('[class="tile-first visible"]');

  }

  public async openHighestRatedMovie() {
    const highestRatedMovieLink = await this.highestRatedMovie.getByRole('link').getAttribute('href');
    await this.highestRatedMovie.locator('[slot="caption"]').click();
    return highestRatedMovieLink;
  }

  public assert = {
    celebrityTitleIs: async (celebrityTitleValue: string) => {
      await expect(this.celebrityTitle).toHaveText(celebrityTitleValue);
    },
  };
}

export default CelebrityDetailsPage;
