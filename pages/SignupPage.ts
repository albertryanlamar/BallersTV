import { Locator, Page } from "@playwright/test";
import { AuthForm } from "../components/AuthForm";
import { CommonActions } from "../helpers/CommonActions";

export class SignupPage{

page:Page;
authForm:AuthForm;
cmnAct:CommonActions;
roleDrpdwn:Locator
tickBox:Locator;
signUpBtn:Locator;
termsLnk:Locator;
privacyLnk:Locator;



constructor(page:Page){
this.page= page;
this.authForm=new AuthForm(this.page);
this.roleDrpdwn;
this.tickBox;
this.signUpBtn;

}

async clickSignup(){
    await this.cmnAct.click(this.signUpBtn);
}

async clickTerms(){
 await this.cmnAct.click(this.termsLnk);
}
async clickPrivacy(){
    await this.cmnAct.click(this.privacyLnk);
}
    
async goToprivacy(){
    const [privacyPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.clickPrivacy()
    ]);

    await privacyPage.waitForLoadState();
}



async signUp(emailName:string,pass:string,val:string){
    await Promise.all([
      this.cmnAct.selectByText(this.roleDrpdwn,val),
      this.authForm.fillCredentials(emailName,pass),
      this.cmnAct.check(this.tickBox),
      this.clickSignup()
    ]);

    
}



}