import {test as base} from "./pageFixtures"
import { testdataLoader } from "../helpers/commonFunction"

const authData = testdataLoader('auth','authTestData.json');

type TestDataFixture={
    loginData : typeof authData;
}

export const test= base.extend<TestDataFixture>({
  loginData:async({},use)=>{
    await use(authData);
  }


})
export {expect} from '@playwright/test';