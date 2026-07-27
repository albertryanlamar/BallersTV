import { Locator, LocatorScreenshotOptions, Page } from "@playwright/test";
import { CommonActions } from "../helpers/CommonActions";


export class NavigationMenu{
  cmnAct:CommonActions = new CommonActions();
  menuBrger:Locator;
  libraryMnu:Locator;
  loginBtn:Locator;
  name1:string;

   constructor(public page:Page){
    this.menuBrger = this.page.getByRole("button",{});
    this.libraryMnu=this.page.getByRole("link",{});
    this.loginBtn = this.page.getByRole("button",{name:'Login'})
  }
  //


   //methods

   async clickMenuBrgr(){
    await this.cmnAct.click(this.menuBrger);

   this.name1='cggg';
   }
    async clickLoginBtn(){
      await this.cmnAct.click(this.loginBtn);
    }
}