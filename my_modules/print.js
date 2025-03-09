/* myMdules print.js */
/*
 - Ptint object have methodes that console.log with colors 
*/

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RESET = "\x1b[0m";
// const GRAY = "\x1b[90m";

const Print = {};


Print.red = (string = "") => {
  console.log(RED+stringFormat(string)+RESET);
}

Print.yellow = (string = "") => {
  console.log(YELLOW+stringFormat(string)+RESET);
}

Print.green = (string = "") => {
  console.log(GREEN+stringFormat(string)+RESET);
}



function stringFormat(string) {
    string = String(string).trim();
    return string;
}

module.exports = Print;
