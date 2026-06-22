import { Locator, Page } from "@playwright/test";
import { CommonActions } from "../helpers/CommonActions";


export class AuthForm{

cmnAct:CommonActions;  
page:Page;
emailTxtBox:Locator;
passwordTxtBx:Locator;

    constructor(page:Page){
        this.page= page;
        this.cmnAct= new CommonActions();
        this.emailTxtBox= this.page.getByRole('');
        this.passwordTxtBx=this.page.getByRole();
    }

    async fillCredentials(uNmae:string,pass:string){
        await this.cmnAct.fill(this.emailTxtBox,uNmae);
        await this.cmnAct.fill(this.passwordTxtBx,pass)
    }
}