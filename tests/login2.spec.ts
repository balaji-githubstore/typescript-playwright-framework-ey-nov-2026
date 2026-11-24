import { test, expect } from "@playwright/test";
import { JsonUtils } from "./../utils/json-reader.js"


test.describe("verify login functionality", () => {

    const validLoginData=JsonUtils.getJsonValue("validLoginData");
    for (let { username, password, languageLabel, expectedValue } of validLoginData) {
        test(`verify valid login for ${username}`, async ({ page }) => {
            await page.goto("https://demo.openemr.io/b/openemr/");
            await page.locator("xpath=//input[@id='authUser']").fill(username);
            await page.locator("xpath=//input[@id='clearPass']").fill(password);
            await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: languageLabel });
            await page.locator("xpath=//button[@id='login-button']").click();
            //Assert the text --> Calendar
            await expect(page.locator("xpath=//span[text()='Calendar']")).toHaveText(expectedValue);
        });
    };

    const invalidLoginData=JsonUtils.getJsonValue("invalidLoginData");
    for (let { username, password, languageLabel, expectedValue } of invalidLoginData)
        test(`verify invalid login for ${username}`, async ({ page }) => {
            await page.goto("https://demo.openemr.io/b/openemr/")
            await page.locator("xpath=//input[@id='authUser']").fill(username);
            await page.locator("xpath=//input[@id='clearPass']").fill(password);
            await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: languageLabel });
            await page.locator("xpath=//button[@id='login-button']").click();

            //Assert the error - Invalid username or password
            await expect(page.locator("xpath=//p[contains(text(),'Invalid')]")).toHaveText(expectedValue);
        });
});
