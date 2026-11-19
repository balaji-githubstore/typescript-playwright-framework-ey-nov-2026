import { test, expect } from "@playwright/test";


test.describe("openemr login UI tests",()=>{
    test("verify title",async ({page})=>{
        await page.goto("https://demo.openemr.io/b/openemr/");
        //use expect for assertion
        await expect(page).toHaveTitle("OpenEMR Login");
    });

    test("verify header",async ({page})=>{
        await page.goto("https://demo.openemr.io/b/openemr/");
        //get the header
        await expect(page.locator("xpath=//p[contains(text(),'most popular')]"))
        .toHaveText("The most popular open-source Electronic Health Record and Medical Practice Management solution.");
    })
})