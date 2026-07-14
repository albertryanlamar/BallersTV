import {test as baseTest, BrowserContext,chromium,TestInfo} from "playwright/test";
import { lambdaRemoteBrowser } from "../utils/remoteBrowers";

export const test = baseTest.extend({
    context: async ({browser}, use, testInfo) => {
        let context;
        let remoteBrowser;
        // local browser
        if (process.env.EXECUTION_ENV === 'local') {
            context = await browser.newContext();
        }
        else{
            // remote broswer
            remoteBrowser = await lambdaRemoteBrowser(testInfo.title,testInfo.project.use.browserName);
            context = await remoteBrowser.newContext();
        }

        await use(context);
        await context.close();
        if(remoteBrowser){
            await remoteBrowser.close();
        }else{
            await browser.close();
        }
    }
})