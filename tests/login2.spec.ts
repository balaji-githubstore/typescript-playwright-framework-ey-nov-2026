import { test, expect } from "@playwright/test";
import { validLoginData, invalidLoginData } from "./../utils/data-source.js"


test.describe("verify login functionality", () => {

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
