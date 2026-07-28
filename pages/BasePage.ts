import { Page,expect } from "@playwright/test";

export class BasePage{

    constructor(public page:Page){

    }

    //
    async navigateToWebsite(url:any){
        await this.page.goto(url);
    }

    //assertions
    async expectBaseTitle(){
        await expect(this.page).toHaveTitle('/Ballers Tv/');
    }
}