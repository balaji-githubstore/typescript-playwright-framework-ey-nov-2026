import { test, expect } from "@playwright/test";




test.describe("verify pet store api", () => {

    test(`verify get valid pet from store`, async ({ request }) => {
        const response = await request.get("https://petstore.swagger.io/v2/pet/5");
        expect(response).toBeOK()

    });
});
