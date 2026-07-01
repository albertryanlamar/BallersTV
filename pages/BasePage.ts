import { Page } from "@playwright/test";

export class BasePage{

    constructor(public page:Page){

    }

    //
    async navigateToWebsite(url:any){
        await this.page.goto(url);
    }
}