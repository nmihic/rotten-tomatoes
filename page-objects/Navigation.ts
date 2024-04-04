import { Locator, Page } from '@playwright/test';

class Navigation {
  page: Page;
  searchBar: Locator;
  searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator("[slot='search-input']");
    this.searchResults = page.locator("[data-qa='search-results-item']");
  }

  public async search(movieTitle: string) {
    await this.page.goto(''); //baseUrl
    await this.searchBar.click();
    await this.searchBar.fill(movieTitle);
    await this.searchResults.first().click();
  }
}

export default Navigation;
