import {testPageObj as base} from "./pageFixtures"
import { testdataLoader } from "../helpers/commonFunction";

const authData = testdataLoader('auth','authTestData.json');
const registrationData = testdataLoader('auth','registrationTestData');

type TestDataFixture={
    loginData : typeof authData;
    registerData: typeof registrationData;
}

export const test = base.extend<TestDataFixture>({
  loginData: async ({}, use) => {
    await use (authData);
  },
  registerData: async ({},use)=> {
    await use (registrationData);
  }
});
export {expect} from '@playwright/test';