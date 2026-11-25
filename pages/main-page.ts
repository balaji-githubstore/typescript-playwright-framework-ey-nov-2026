/** Handle all common elements like menu, profile and all */

const PATIENTMENU_LOCATOR = "xpath=//div[text()='Patient']";
const MESSAGEMENU_LOCATOR = "xpath=//div[text()='Messages']";

import type { Page } from "@playwright/test";

export class MainPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnPatientMenu(): Promise<void> {
        await this.page.locator(PATIENTMENU_LOCATOR).click();
    }

    public async clickOnMessageMenu(): Promise<void> {
        await this.page.locator(MESSAGEMENU_LOCATOR).click();
    }
}