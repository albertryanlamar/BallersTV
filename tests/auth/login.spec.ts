
import process from "node:process";
import {test, expect} from "../../fixtures/testDataFixtures"
import {openWebsiteStep,goToLoginStep,fillLoginWithCredentialsStep,clickLoginStep} from "../../helpers/CommonStepsFlow"

test(`Login with valid email and password`,async({basePage,homePage,loginPage,loginData})=>{

  // first step
  await openWebsiteStep(basePage,process.env.BASE_URL);
  await basePage.expectBaseTitle();

  // second step
  await goToLoginStep(homePage,loginPage);
  await loginPage.expectLoginTitle();

  // third step
  await fillLoginWithCredentialsStep(loginPage, loginData.validLogin.username, loginData.validLogin.password);
  await expect(loginPage.authForm.emailTxtBox).toHaveValue(loginData.validLogin.username);
  await expect(loginPage.authForm.passwordTxtBx).toHaveValue(loginData.validLogin.password);

  // fourth step
  await clickLoginStep(loginPage);
  await expect(homePage.page).toHaveTitle(/Ballers TV/);

})

test(`Login with invalid Password`,async({basePage,homePage,loginPage,loginData})=>{
  // first step
  await openWebsiteStep(basePage,process.env.BASE_URL);
  await basePage.expectBasepage();

  // secon step
  await goToLoginStep(homePage,loginPage);
  await loginPage.expectLoginTitle();

  // 3rd step
  await fillLoginWithCredentialsStep(loginPage,loginData.validLogin.username,loginData.invalidLogin.password);
  await loginPage.expectCredentialsFilled(loginData.validLogin.username,loginData.invalidLogin.password);

  //4th step
  await clickLoginStep(loginPage);
  // assertions ng error
});

test(`Login with empty credential`,async (basePage,homePage,loginPage,loginData)=>{
  //1st step
  await openWebsiteStep(basePage,process.env.BASE_URL);
  await basePage.expectBaseTitle();

  // 2nd step
  await goToLoginStep(homePage,loginPage);
  await loginPage.expectLoginTitle();

  //3rd steps
  await expect(loginData.authForm.emailTxtBox).toHaveValue('');
  await expect(loginData.authForm.passwordTxtBx).toHaveValue('')
  
  //4th step
  await clickLoginStep(loginPage);
  //assertions of error message
})