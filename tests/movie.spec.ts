import { movieTitle } from '../utils/constants';
import { test } from '../utils/fixtures';

test.describe('Movies', () => {
  test('search for movie', async ({
    navigation,
    movieDetailsPage
  }) => {
    await navigation.search(movieTitle);
    await navigation.openMovieTvSearchResult();
    await movieDetailsPage.assert.movieTitleIs(movieTitle);
  });
});
