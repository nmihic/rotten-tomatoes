import { Locator, Page } from '@playwright/test';
import { actor, movieTitle } from '../utils/constants';

class Navigation {
  page: Page;
  searchBar: Locator;
  moviesTvSearchResults: Locator;
  celebritySearchResult: Locator;
  tvShowsNavigation : Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator("[slot='search-input']");
    this.moviesTvSearchResults = page.locator("[slot='content']").filter({ hasText: movieTitle });
    this.celebritySearchResult = page.locator("[slot='celebrity']").filter({ hasText: actor });
    this.tvShowsNavigation = page.locator('[data-qa="masthead:tv"]');
  }

  public async search(searchInput: string) {
    await this.page.goto(''); //baseUrl
    await this.searchBar.click();
    await this.searchBar.fill(searchInput);
  }

  public async openMovieTvSearchResult() {
    await this.moviesTvSearchResults.click();
  }

  public async openCelebritySearchResult() {
    await this.celebritySearchResult.click();
  }

  public async openTvShowsList() {
    await this.page.goto(''); //baseUrl
    await this.tvShowsNavigation.click()
  }
}

export default Navigation;
