import { Locator, Page } from "@playwright/test";
import { AuthForm } from "../components/AuthForm";
import { CommonActions } from "../helpers/CommonActions";

export class SignupPage{

page:Page;
authForm:AuthForm;
cmnAct:CommonActions;
roleDrpdwn:Locator
termsCheckbox:Locator;
promoCodeLink:Locator;
promoCodeTextbox:Locator;
signUpBtn:Locator;
termsLnk:Locator;
privacyLnk:Locator;



constructor(page:Page){
this.page= page;
this.authForm=new AuthForm(this.page);
this.roleDrpdwn;
this.termsCheckbox = this.page.getByRole('checkbox');
this.signUpBtn=this.page.getByRole('button', { name: 'Create account' })
this.promoCodeLink = page.getByText('Have a promo code?', {exact: true});
this.promoCodeTextbox = this.page.getByPlaceholder('Promo code');
}

async clickSignup(){
    await this.cmnAct.click(this.signUpBtn);
}

async clickTerms(){
 await this.cmnAct.click(this.termsLnk);
}

async closeTab(closePage:any){
    await closePage.close();
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

async clickPromoCode(){
    await this.cmnAct.click(this.promoCodeLink);
}
async fillPromo(promo:string){
    await this.cmnAct.fill(this.promoCodeTextbox,promo);
}



async signUp(emailName:string,pass:string,roleval:string,havePromo:boolean= false,promoCodeValue?:string){
    await Promise.all([
      this.cmnAct.selectByText(this.roleDrpdwn,roleval),
      this.authForm.fillCredentials(emailName,pass),
      this.cmnAct.check(this.termsCheckbox),
    ]);
    if(havePromo&&promoCodeValue){
        await this.clickPromoCode();
        await this.fillPromo(promoCodeValue);
    }  
}

//assertions
async expectedCredentialsFilled(role:string,emailName:string,password:string,isPassHide:boolean=false,hasPromo:boolean= false,promoCode?:string){
    await expect(this.roleDrpdwn).toHaveValue(role.lowerCase())
    await expect(this.authForm.emailTxtBox).toHaveValue(emailName);
    await expect(this.authForm.passwordTxtBox).toHaveValue(password);
    if(isPassHide){
      await expect(this.AuthForm.showPasswordBtn).toHaveAttribute('type','password');
    }
    if(hasPromo && promoCode){
        await expect(this.promoCodeTextbox).toHaveValue(promoCode);
    }
}



}