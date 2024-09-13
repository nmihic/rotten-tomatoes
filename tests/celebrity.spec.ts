import { actor } from '../utils/constants';
import { test } from '../utils/fixtures';

test.describe('Celebrity', () => {
  test('search for actor', async ({ navigation, celebrityDetailsPage }) => {
    await navigation.search(actor);
    await navigation.openCelebritySearchResult();
    await celebrityDetailsPage.assert.celebrityTitleIs(actor);
  });

  test('open highest rated movie for the chosen actor', async ({
    navigation,
    celebrityDetailsPage,
    movieDetailsPage,
  }) => {
    await navigation.search(actor);
    await navigation.openCelebritySearchResult();

    const highestRatedMovieUrl =
      await celebrityDetailsPage.openHighestRatedMovie();
    await movieDetailsPage.assert.urlIs(highestRatedMovieUrl);
  });
});
