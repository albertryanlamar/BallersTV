import { Page } from "@playwright/test";

export class BasePage{
 page:Page;

    constructor(page:Page){
this.page = page;

    }

    //
    async navigateToWebsite(){
        await this.page.goto(process.env.URL);
        await this.page.waitForLoadState('load');
    }
}