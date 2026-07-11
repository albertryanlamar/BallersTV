// common reusable test steps

import { test } from '@playwright/test';

export async function openWebsiteStep(basePage:any, url:any){
    await test.step(`Navigate to Ballers TV website`, async ()=>{
        await basePage.navigateToWebsite(url);
        await basePage.page.waitForLoadState();
    })
}

export async function goToLoginStep(homePage:any, loginPage:any){
    await test.step(`Open login form`, async ()=>{
        await homePage.menuBrger();
        await homePage.loginBtn();
        await loginPage.page.waitForLoadState();
    })
}

export async function fillLoginWithCredentialsStep(loginPage:any, username:string, password:string){
    await test.step(`Fill login credentials`, async ()=>{
        await loginPage.login(username, password);
    })
}

export async function clickLoginStep(loginPage:any){
    await test.step(`Click Login button`, async ()=>{
        await loginPage.clickLogin();
    })
}