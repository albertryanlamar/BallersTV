import {test as baseTest,BrowserContext,Browser} from "@playwright/test";
import { lambdaRemoteBrowser } from "../utils/remoteBrowers";

export const testContext = baseTest.extend<{ context: BrowserContext }>({
    context: async ({browser}, use, testInfo) => {
        let context:BrowserContext;
        let remoteBrowser:Browser;
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
       // if(remoteBrowser){
       //     await remoteBrowser.close();
        //}
    }
})