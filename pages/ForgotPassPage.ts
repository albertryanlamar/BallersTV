import {Page,expect} from '@playwrighr/test';
import {AuthForm} from '../components/AuthForm';
import {CommonActions} from '../helpers/CommonActions';

export class ForgotPassPage{

  bckToSignBtn:Locator;
  resetBtn: Locator;
  authForm:AuthForm;
  commonActions:CommonActions;
  
  constructor(public page:Page){
      this.authForm = new AuthForm(this.page);
      this.commonActions = new CommonActions()
      this.bckToSignBtn= this.page.getByRole('link', { name: 'Back to sign in' });
      this.resetBtn = this.page.getByRole('button', { name: 'Send reset link' });
    }

    //actions
    async fillEmailCredential(email:string) {
      await authForm.fillCredForgotPage(email);
    }

    async clickResetLink(){
       this.commonActions.click(this.resetBtn);
    }
}