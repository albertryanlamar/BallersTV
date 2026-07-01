
import process from "node:process";
import {test, expect} from "../../fixtures/testDataFixtures"

test(`Login with valid email and password`,({basePage,homePage,loginPage,loginData})=>{
   test.step(`Navigate to Ballers TV`,async()=>{
      await basePage.navigateToWebsite(process.env.BASE_URL);
      await homePage.page.waitForLoadState();
      await expect(homePage.page).toHaveTitle('');
   })
   test.step(`Click Login`,async()=>{
      await homePage.menuBrger();
      await homePage.loginBtn();
      await loginPage.page.waitForLoadState();
      await loginPage.login(loginData.validLogin.);
   })

})