import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { fileChecker } from '../helpers/commonFunction';

const NODE_ENV = process.env.NODE_ENV || 'staging';

const envFile = path.join(__dirname,`.env.${NODE_ENV}`);

fileChecker(envFile);

dotenv.config({path:envFile});