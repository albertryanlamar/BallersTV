
import process from "node:process";
import {test, expect} from "../../fixtures/testDataFixtures"
import {openWebsite,goToLogin,loginWithCredentials} from "../../helpers/CommonStepsFlow"

test(`Login with valid email and password`,({basePage,homePage,loginPage,loginData})=>{

   openWebsite(basePage,process.env.BASE_URL);
   test.step(`Click Login`,async()=>{
      await homePage.menuBrger();
      await homePage.loginBtn();
      await loginPage.page.waitForLoadState();
      await loginPage.login(loginData.validLogin.username,loginData.validLogin.password);
   })
})

test(`Login with invalid Password`,()=>{


});