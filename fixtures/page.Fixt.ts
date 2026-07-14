import {test as pageFixture} from "./contextFixtures";

export const test = pageFixture.extend({

    page: async({context},use) => {
        const page = await context.newPage()
        await use(page);
    }
})