import { test as base, Page } from '@playwright/test';

import Navigation from '../page-objects/Navigation';
import MovieDetailsPage from '../page-objects/MovieDetailsPage';
import CelebrityDetailsPage from '../page-objects/CelebrityDetailsPage';
import List from '../page-objects/List';

export const test = base.extend<{
  page: Page;
  navigation: Navigation;
  movieDetailsPage: MovieDetailsPage;
  celebrityDetailsPage: CelebrityDetailsPage;
  list: List;
}>({
  navigation: ({ page }, use) => use(new Navigation(page)),
  movieDetailsPage: ({ page }, use) => use(new MovieDetailsPage(page)),
  celebrityDetailsPage: ({ page }, use) => use(new CelebrityDetailsPage(page)),
  list: ({ page }, use) => use(new List(page)),
});
