import { Locator, Page } from '@playwright/test';
import { actor, movieTitle } from '../utils/constants';

class Navigation {
  page: Page;
  searchBar: Locator;
  moviesTvSearchResults: Locator;
  celebritySearchResult: Locator;
  tvShowsNavigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator("[slot='search-input']");
    this.moviesTvSearchResults = page
      .locator("[slot='media-results']")
      .filter({ hasText: movieTitle });
    this.celebritySearchResult = page
      .locator("[slot='celebrity-results']")
      .filter({ hasText: actor });
    this.tvShowsNavigation = page.locator('[data-qa="masthead:tv"]');
  }

  public async search(searchInput: string) {
    await this.page.goto('', { waitUntil: 'domcontentloaded' }); //baseUrl
    await this.searchBar.click();
    await this.searchBar.fill(searchInput);
  }

  public async openMovieTvSearchResult() {
    await this.moviesTvSearchResults.getByRole('link', { name: movieTitle }).first().click({ force: true });
    await this.page.waitForLoadState('load');
  }

  public async openCelebritySearchResult() {
    await this.celebritySearchResult.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  public async openTvShowsList() {
    await this.page.goto('', { waitUntil: 'domcontentloaded' }); //baseUrl
    await this.tvShowsNavigation.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}

export default Navigation;
