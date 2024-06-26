import { test } from '../utils/fixtures';

test.describe('List', () => {
    test('open tv shows list', async ({
        navigation,
        list
    }) => {
        await navigation.openTvShowsList();
        await list.assert.listTitleIs('TV Shows');
    });
});