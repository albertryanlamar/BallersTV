import {test as base} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage"
import {HomePage} from "../pages/HomePage"
import { BasePage } from "../pages/BasePage";
import { SignupPage } from "../pages/SignupPage";



type PageFixtures = {
loginPage:LoginPage;
homePage: HomePage;
basePage: BasePage;
signupPage:SignupPage;
}


export const test = base.extend<PageFixtures>({

  basePage:async({page},use)=>{
    const basePage = new BasePage(page);
    await use (basePage);
  },

  loginPage: async({page},use)=>{
    const loginPage = new LoginPage(page);
    await use (loginPage);
  },
  homePage: async ({page},use)=>{
    const homePage = new HomePage(page);
    await use(homePage);
  },
  signupPage:async({page},use)=>{

  }

});