import { expect, type Page } from "@playwright/test";

export class CalendarPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyCalendarHeader(expectedHeader: string): Promise<void> {

        await expect(this.page.locator("xpath=//span[text()='Calendar']")).toHaveText(expectedHeader);
    }
}