import { movieTitle } from '../utils/constants';
import { test } from '../utils/fixtures';

test.describe('Movies', () => {
  test('search for movie', async ({ navigation, movieDetailsPage }) => {
    await navigation.search(movieTitle);
    await navigation.openMovieTvSearchResult();
    await movieDetailsPage.assert.movieTitleIs(movieTitle);
  });

  test('open a celebrity for selected movie', async ({
    navigation,
    celebrityDetailsPage,
    movieDetailsPage,
  }) => {
    await navigation.search(movieTitle);
    await navigation.openMovieTvSearchResult();

    const castAndCrewNameValue = await movieDetailsPage.openCastAndCrew();
    await celebrityDetailsPage.assert.celebrityTitleIs(castAndCrewNameValue!);
  });
});
