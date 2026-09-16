import {Page,TestInfo} from "@playwright/test"
import * as allure from "allure-js-commomn"

export async function attachedScreenshot(page:Page,testInfo:TestInfo,name:string='Screenshot') {
    const screenCapture = await page.screenshot({fullPage:true});
    //allure attachement
    await allure.attachment(name,screenCapture,'image/png');

    //html report
    await testInfo.attachment(name,{body: screenCapture,content-type: 'image/png'})
}