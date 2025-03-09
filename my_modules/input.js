const readline = require('node:readline');
const FORMAT = require('./format.js');
const IS_VALID = require('./isValid.js');
const Print  = require("./print.js");
/*
 - Input object have methodes that act like input()in python with check vlue : "!they are promeses!"
*/

const STD = {
  input: process.stdin,
  output: process.stdout,
}

const Input = {};


function input(msg,callBackCheck,callBackFormat) {
  const Rd = readline.createInterface(STD);
  const myPrompt = () => prompt(Rd, msg);
  myPrompt();
  return new Promise((resolve) => {
    Rd.on("line", (value) => {
      if (isExist(value)) {
        Rd.close();
        process.exit();
        return;
      }
      
      
      if (callBackCheck?callBackCheck(value):true ) {
        value = value.trim();
        value = callBackFormat?callBackFormat(value):value;
        resolve(value)
        Rd.close();
        return;
      }
      myPrompt();
    })
  })
}


Input.url =  () => {
  return new Promise(async (resolve) => {
    const value = await input("url :",IS_VALID.url,FORMAT.url);
    resolve(value);
  })
 
}



Input.fileName = () => {
  return new Promise(async (resolve) => {
    const value = await input("file name :",IS_VALID.filename,FORMAT.fileName);
    resolve(value);
  })
 
}


Input.dir = () => {
  return new Promise(async (resolve) => {
    const value = await input("dir[If no directory is specified,the current directory will be used]:",null,FORMAT.dir);
    resolve(value); 
  })
}


Input.exit = () => {
  const Rd = readline.createInterface(STD);
  const myPrompt = () => prompt(Rd, `press enter to exit ...`);
  myPrompt();
  return new Promise((resolve) => {
    Rd.on("line", () => {
      resolve(0)
      Rd.close();
      process.exit();
      return;
    })
  })
}



function isExist(string) {
  if (!string) {
    return false;
  }

  string = String(string);
  string = string.trim();
  string = string.toLowerCase();

  if (string === ".exit") return true;

  return false;
}

function prompt(rdObj, text = "") {
  if (!rdObj) {
    throw new Error("not an readline object");
  }
  rdObj.setPrompt(text);
  rdObj.prompt();
}



// async function test(){

//   const res = await Input.url();
//   console.log(res);
  
// }

// test();


module.exports = Input;