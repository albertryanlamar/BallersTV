// common reusable test steps

import { test } from '@playwright/test';

export async function openWebsiteStep(basePage:BasePage, url:any){
    await test.step(`Navigate to Ballers TV website`, async ()=>{
        await basePage.navigateToWebsite(url);
        await basePage.page.waitForLoadState();
    })
}

export async function goToLoginStep(homePage:HomePage, loginPag:LoginPagey){
    await test.step(`Open login form`, async ()=>{
        await homePage.menuBrger();
        await homePage.loginBtn();
        await loginPage.page.waitForLoadState();
    })
}

export async function fillLoginWithCredentialsStep(loginPage:LoginPage, username:string, password:string){
    await test.step(`Fill login credentials`, async ()=>{
        await loginPage.login(username, password);
    })
}

export async function clickLoginStep(loginPage:LoginPage){
    await test.step(`Click Login button`, async ()=>{
        await loginPage.clickLogin();
    })
}

export async function clickCreateAccountStep(loginPage:LoginPage){
    await test.step(`Click Create Account Link`, async ()=>{
        await loginPage.clickCreateAccountBtn();
});
}

export async function fillRegisterInfo(signupPage:SignupPage,email,password,role,havePromo:boolean= false,promoValue) {
  await test.step(`fill Info `,async()=>{
   await signupPage.signUp(email,password,role,havePromo,promoValue);
  })
    
}