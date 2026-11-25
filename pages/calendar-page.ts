import { expect, type Page } from "@playwright/test";

const CALENDARHEADER_LOCATOR = "xpath=//span[text()='Calendar']";

export class CalendarPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyCalendarHeader(expectedHeader: string): Promise<void> {

        await expect(this.page.locator(CALENDARHEADER_LOCATOR)).toHaveText(expectedHeader);
    }
}