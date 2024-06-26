import { Page, Locator, expect } from '@playwright/test';

class MovieDetailsPage {
  page: Page;
  movieTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.movieTitle = page.locator("[slot='titleIntro']");
  }

  public assert = {
    movieTitleIs: async (movieTitleValue: string) => {
      await expect(this.movieTitle).toHaveText(movieTitleValue);
    },
    urlIs: async (urlValue: string | null) => {
      if (urlValue === null) {
        throw new Error('No URL found')
      }
      await expect(this.page).toHaveURL(urlValue);
    }
  };
}

export default MovieDetailsPage;
