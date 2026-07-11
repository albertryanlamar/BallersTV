
import process from "node:process";
import {test, expect} from "../../fixtures/testDataFixtures"
import {openWebsiteStep,goToLoginStep,fillLoginWithCredentialsStep,clickLoginStep} from "../../helpers/CommonStepsFlow"

test(`Login with valid email and password`,async({basePage,homePage,loginPage,loginData})=>{

  // first step
  await openWebsiteStep(basePage,process.env.BASE_URL);
  await expect(basePage.page).toHaveTitle(/Ballers TV/);

  // second step
  await goToLoginStep(homePage,loginPage);
  await expect(loginPage.page).toHaveTitle(/Login/);

  // third step
  await fillLoginWithCredentialsStep(loginPage, loginData.validLogin.username, loginData.validLogin.password);
  await expect(loginPage.unameTxtBox).toHaveValue(loginData.validLogin.username);
  await expect(loginPage.passwordTxtBox).toHaveValue(loginData.validLogin.password);

  // fourth step
  await clickLoginStep(loginPage);
  await expect(homePage.page).toHaveTitle(/Ballers TV/);

})

test(`Login with invalid Password`,async({basePage,homePage,loginPage,loginData})=>{
  // first step
  await openWebsiteStep(basePage,process.env.BASE_URL);
  await expect(basePage.page).toHaveTitle(/Ballers TV/);

});