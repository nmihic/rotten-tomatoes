import { Locator, Page, expect } from "@playwright/test";

class List {
    page: Page;
    listTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.listTitle = page.locator('[data-qa="discovery-header-title"]');
    }

    public assert = {
        listTitleIs: async (title: string) => {
            await expect(this.listTitle).toContainText(title);
        },
    };
}

export default List