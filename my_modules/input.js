const readline = require('node:readline');
const COLORS = require('colors');
const FORMAT = require('./format');
const IS_VALID = require('./isValid');


/*
 - Input object have methodes that act like input()in python with check vlue : "!they are promeses!"
*/


const STD = {
  input: process.stdin,
  output: process.stdout,
}

const Input = {};

Input.url = () => {
  const Rd = readline.createInterface(STD);
  const myPrompt = () => prompt(Rd, " url : ".yellow);
  myPrompt();

  return new Promise((resolve) => {
    Rd.on("line", (value) => {
      if (isExist(value)) {
        Rd.close();
        process.exit();
        return;
      }

      if (IS_VALID.url(value)) {
        value = FORMAT.url(value);
        resolve(value)
        Rd.close();
        return;
      }
      myPrompt();
    })
  })

}

Input.fileName = () => {
  const Rd = readline.createInterface(STD);
  const myPrompt = () => prompt(Rd, " file name : ".yellow);
  myPrompt();

  return new Promise((resolve) => {
    Rd.on("line", (value) => {
      if (isExist(value)) {
        Rd.close();
        process.exit();
        return;
      }

      if (IS_VALID.filename(value)) {
        value = FORMAT.fileName(value);
        resolve(value)
        Rd.close();
        return;
      }
      myPrompt();
    })
  })

}


Input.dir = () => {
  const Rd = readline.createInterface(STD);
  const myPrompt = () => prompt(Rd, " dir : ".yellow);
  myPrompt();

  return new Promise((resolve) => {
    Rd.on("line", (value) => {
      if (isExist(value)) {
        Rd.close();
        process.exit();
        return;
      }
      if (IS_VALID.dir(value)) {
        value = FORMAT.dir(value);
        resolve(value)
        Rd.close();
        return;
      }
      myPrompt();
    })
  })

}


Input.exit = () => {
  const Rd = readline.createInterface(STD);
  const myPrompt = () => prompt(Rd, `press enter to exit ...`.yellow);
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


module.exports = Input;