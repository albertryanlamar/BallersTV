
import {testContext as pageFixture} from "./contextFixtures";
import { Page } from "@playwright/test";

export const testPage = pageFixture.extend<{ page: Page }>({

    page: async({context},use) => {
        const page = await context.newPage()
        await use(page);
    }
})