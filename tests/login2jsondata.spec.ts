import { test, expect } from "@playwright/test";
import { JsonUtils } from "../utils/json-reader.js"
import { LoginPage } from "../pages/login-page.js";
import { CalendarPage } from "../pages/calendar-page.js";

//data driven using json file

test.describe("verify login functionality", () => {

    const validLoginData = JsonUtils.getJsonValue("validLoginData");
    for (let { username, password, languageLabel, expectedValue } of validLoginData) {
        test(`verify valid login for ${username}`, async ({ page }) => {
            await page.goto("https://demo.openemr.io/b/openemr/");
            const loginPage = new LoginPage(page);
            await loginPage.enterUsername(username);
            await loginPage.enterPassword(password);
            await loginPage.selectLanguageByLabel(languageLabel);
            await loginPage.clickOnLogin();

            //Assert the text --> Calendar
            const calendarPage = new CalendarPage(page);
            await calendarPage.verifyCalendarHeader(expectedValue);
        });
    };

    const invalidLoginData = JsonUtils.getJsonValue("invalidLoginData");
    for (let { username, password, languageLabel, expectedValue } of invalidLoginData)
        test(`verify invalid login for ${username}`, async ({ page }) => {
            await page.goto("https://demo.openemr.io/b/openemr/")

            const loginPage = new LoginPage(page);
            await loginPage.enterUsername(username);
            await loginPage.enterPassword(password);
            await loginPage.selectLanguageByLabel(languageLabel);
            await loginPage.clickOnLogin();

            //Assert the error - Invalid username or password
            await loginPage.verifyInvalidLoginError(expectedValue);
        });
});
