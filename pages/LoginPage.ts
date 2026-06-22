import { Locator, Page } from "@playwright/test";
import { CommonActions } from "../helpers/CommonActions";
import { AuthForm } from "../components/AuthForm";

export class LoginPage{

cmnAct:CommonActions;
authForm:AuthForm;
page:Page;
unameTxtBox:Locator;
passwordTxtBox: Locator;
signUpLink:Locator;
partnersLoginLink: Locator;
loginBtn:Locator;


constructor(page:Page){
    this.page = page;
    this.authForm = new AuthForm(this.page);
    this.unameTxtBox=;
    this.passwordTxtBox=;
    this.signUpLink=;
    this.partnersLoginLink=;
    this.loginBtn=;
    this.cmnAct= new CommonActions();
}

//actions

async clickLogin(){
    this.cmnAct.click(this.loginBtn);
}

async login(userName:string,password:string){
   await Promise.all([
       this.authForm.fillCredentials(userName,password),
       this.clickLogin()
    ]);
}



    
}