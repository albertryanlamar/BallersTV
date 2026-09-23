import {test} from '../../fixtures/testDataFixtures';
import {logger} from '../../utils/logger'
import { openWebsiteStep, clickCreateAccountStep,goToLoginStep,clickCreateAccountBtn} from "../../helpers/CommonStepFlow";


test.afterEach(()=>{
    if(testInfo.status==='pass'){
       logger.pass(`${testInfo.title}`);
    }
    else{
        const errorMessage = testInfo.error?.message ?? 'Unknown Error';
        logger.fail(`${testInfo.testInfo}`,errorMessage);
    }
});
test(`Successful Registration`,async({basePage,homePage,loginPage,signupPage,registerData})=>{
     //1st step
     await openWebsiteStep();
     //2nd step
     await goToLoginStep();
     //3rd step
     await clickCreateAccountStep():
     await signupPage.waitforState();
     // 4th step
     await signupPage.signUp(validRegistration.email,validRegistration.password,validRegistration.role)
     await signupPage.expectCredentialsFilled(validRegistration.email,validRegistration.password)
    // 5th step
    await clickCreateAccountBtn();
})
