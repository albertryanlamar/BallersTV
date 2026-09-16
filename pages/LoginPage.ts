import { Locator, Page,expect } from "@playwright/test";
import { CommonActions } from "../helpers/CommonActions";
import { AuthForm } from "../components/AuthForm";

export class LoginPage{

cmnAct:CommonActions;
authForm:AuthForm;
page:Page;
unameTxtBox:Locator;
passwordTxtBox: Locator;
signInButton:Locator;
creatAccountLink: Locator;
loginBtn:Locator;
errorMessage:Locator;
showPasswordBtn:Locator;

constructor(page:Page){
    this.page = page;
    this.authForm = new AuthForm(this.page);
    this.unameTxtBox=this.page.getByPlaceholder('you@eqxample.com')
    this.passwordTxtBox=this.page.getByPlaceholder('Your password');
    this.signInButton=this.page.getByRole('button', { name: 'Sign in' });
    this.createAccountLink=this.page.getByRole('link', { name: 'Create an account' });
    thid.forgetPasswordLink = this.page.getByRole('link', { name: "I don't know my password" })
    this.showPasswordBtn = this.page.getByText('Show')
    this.cmnAct= new CommonActions();
}

//actions

async clickLogin(){
    await this.cmnAct.click(this.signInButton);
}

async login(userName:string,password:string){
   await Promise.all([
       this.authForm.fillCredentials(userName,password),
    ]);
}

async showPassword(){
    await this.cmnAct.click(this.showPasswordBtn);
}

//assertions
async expectLoginTitle(){
    await expect(this.page).toHaveTitle('/Login/');
}

async expectCredentialsFilled(emailVal,passVal){
    await expect(this.authForm.emailTxtBox).toHaveValue(emailVal);
    await expect(this.authForm.passwordTxtBx).toHaveValue(passVal);
}


    
}