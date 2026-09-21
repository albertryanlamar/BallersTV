import { Locator, Page } from "@playwright/test";
import { CommonActions } from "../helpers/CommonActions";


export class AuthForm{

cmnAct:CommonActions;  
page:Page;
emailTxtBox:Locator;
passwordTxtBx:Locator;
showPasswordBtn:Locator;

    constructor(page:Page){
        this.page= page;
        this.cmnAct= new CommonActions();
        this.emailTxtBox= this.page.getByPlaceholder('you@example.com');
        this.passwordTxtBx=this.page.getByPlaceholder('Your password');
        this.showPasswordBtn = this.page.getByText('Show', { exact: true });

    }

    async fillCredentials(uNmae:string,pass:string){
        await this.cmnAct.fill(this.emailTxtBox,uNmae);
        await this.cmnAct.fill(this.passwordTxtBx,pass)
    }

    async fillCredForgotPage(uName:string){
        await this.cmnAct.fill(this.emailTxtBox,uName);
    }
    async showPassword() {
        await this.cmnAct.click(this.showPasswordBtn):
    }
}