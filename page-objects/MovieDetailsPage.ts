import { Page, Locator, expect } from '@playwright/test';

class MovieDetailsPage {
  page: Page;
  movieTitle: Locator;
  castAndCrewSection: Locator;
  castAndCrewName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.movieTitle = page.locator("[slot='titleIntro']");
    this.castAndCrewSection = page.locator("[data-qa='person-item']");
    this.castAndCrewName = page.locator("[data-qa='person-name']");
  }

  public async openCastAndCrew() {
    const castAndCrewNameValue = this.castAndCrewName.first().textContent();
    await this.castAndCrewSection.first().click();
    await this.page.waitForLoadState('domcontentloaded');
    return castAndCrewNameValue;
  }

  public assert = {
    movieTitleIs: async (movieTitleValue: string) => {
      await expect(this.movieTitle).toHaveText(movieTitleValue);
    },
    urlIs: async (urlValue: string | null) => {
      if (urlValue === null) {
        throw new Error('No URL found');
      }
      await expect(this.page).toHaveURL(urlValue);
    },
  };
}

export default MovieDetailsPage;
