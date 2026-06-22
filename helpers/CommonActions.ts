import { expect, Locator } from "@playwright/test";
import { expectFailure } from "node:test";

export class CommonActions {

    async fill(element:Locator, value:any){
        await expect(element).toBeVisible();
        await element.fill(value);
    }

    async click(element:Locator){
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
        await element.click();
    }

    async check(element:Locator){
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
        try{
           await element.check();
        }
        catch{
            await element.click();
        }
    }

    async selectByText(element:Locator, selectVal:string){
        await expect(element).toBeVisible();
        await element.selectOption(`selectVal`)
    }
}