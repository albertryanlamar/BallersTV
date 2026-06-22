import dotenv from 'dotenv'
import path from 'path';
import fs from 'fs'

const NODE_ENV = process.env.NODE_ENV || 'staging';

const envFile = path.join(__dirname,`.env.${NODE_ENV}`);

if (!fs.existsSync(envFile)){
    throw new Error(`Environment fle not exists ${envFile}`)
}

dotenv.config({path:envFile});