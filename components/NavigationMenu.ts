import { Locator, LocatorScreenshotOptions, Page } from "@playwright/test";
import { CommonActions } from "../helpers/CommonActions";


export class NavigationMenu{
  cmnAct:CommonActions = new CommonActions();

   constructor(public page:Page){}
  //Locators
  get NavigationMenuLocators(){
    return{
          menuBrger: this.page.getByRole("button",{}),
          libraryMnu: this.page.getByRole("link",{}),
          loginBtn: this.page.getByRole("button",{name:'Login'})
    }
  }

   //methods

   async clickMenuBrgr(){
    await this.cmnAct.click(this.NavigationMenuLocators.menuBrger);
    this.NavigationMenuLocators.menuBrger().x

   }
    async clickLoginBtn(){
      await this.cmnAct.click(this.NavigationMenuLocators.loginBt);
    }
}