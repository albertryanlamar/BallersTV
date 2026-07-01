import { Page } from "@playwright/test";
import { NavigationMenu } from "../components/NavigationMenu";

export class HomePage{

navigationMnu:NavigationMenu;

constructor (public page: Page){
this.navigationMnu= new NavigationMenu(this.page);
}
  

//

async menuBrger(){
     await this.navigationMnu.clickMenuBrgr();
}
async loginBtn(){
    await this.navigationMnu.clickLoginBtn();
}

}