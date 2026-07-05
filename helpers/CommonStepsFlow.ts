// common reusable test steps

import { test } from '@playwright/test';

export async function openWebsite(basePage:any, url:any){
    await test.step(`Navigate to Ballers TV website`, async ()=>{
        await basePage.navigateToWebsite(url);
        await basePage.page.waitForLoadState();
    })
}

export async function goToLogin(homePage:any, loginPage:any){
    await test.step(`Open login form`, async ()=>{
        await homePage.menuBrger();
        await homePage.loginBtn();
        await loginPage.page.waitForLoadState();
    })
}

export async function loginWithCredentials(loginPage:any, username:string, password:string){
    await test.step(`Perform login`, async ()=>{
        await loginPage.login(username, password);
    })
}