import {test as base} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage"
import {HomePage} from "../pages/HomePage"



type PageFixtures = {

loginPage:LoginPage;
homePage: HomePage;
}


export const test = base.extend<PageFixtures>({

  loginPage: async({page},use)=>{
    const loginPage = new LoginPage();
    await use (loginPage)
  },
  homePage: async ({page},use)=>{
    const homePage = new HomePage(page);
    await use(homePage);
  }

});

export {expect} from "@playwright/test";