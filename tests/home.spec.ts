import { movieTitle } from '../utils/constants';
import { test } from '../utils/fixtures';

test.describe('search for a movie', () => {
  test('search', async ({ navigation, detailsPage }) => {
    await navigation.search(movieTitle);
    await detailsPage.assert.titleIs(movieTitle);
  });
});
