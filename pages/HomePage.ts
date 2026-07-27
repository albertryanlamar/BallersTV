import { Page } from "@playwright/test";
import { NavigationMenu } from "../components/NavigationMenu";

export class HomePage{

constructor (public page: Page){
}

get navigationMnu(): NavigationMenu {
   return new NavigationMenu(this.page);
}


//

async menuBrger(){
     await this.navigationMnu.clickMenuBrgr();
}
async loginBtn(){
    await this.navigationMnu.clickLoginBtn();
}

}