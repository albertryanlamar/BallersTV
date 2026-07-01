import fs from 'fs'
import path from 'path';


let readFile:any;
const testdataBasePath = path.join(process.cwd(),'testData')

export function fileChecker(file:any){

   if(!fs.existsSync(file)){
     throw new Error(`File not exist: ${file}`)
   }
}

export async function testdataLoader(fileFoldeName:string,fileName:string){
    const filePath = path.join(testdataBasePath,fileFoldeName,fileName);
    fileChecker(filePath);
    return readFile = await JSON.parse(fs.readFileSync(filePath,'utf-8'));
}