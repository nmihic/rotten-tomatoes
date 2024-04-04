import { test as base, Page } from '@playwright/test';

import Navigation from '../page-objects/Navigation';
import DetailsPage from '../page-objects/DetailsPage';

export const test = base.extend<{
  page: Page;
  navigation: Navigation;
  detailsPage: DetailsPage;
}>({
  navigation: ({ page }, use) => use(new Navigation(page)),
  detailsPage: ({ page }, use) => use(new DetailsPage(page)),
});
