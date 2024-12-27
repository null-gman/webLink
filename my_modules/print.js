const COLORS = require('colors'); /* it's efecte prototype */
/*
 - Ptint object have methodes that console.log with colors 
*/


const Print = {};


Print.red = (string = "") => {
  console.log(stringFormat(string).red);
}

Print.yellow = (string = "") => {
  console.log(stringFormat(string).yellow);
}

Print.green = (string = "") => {
  console.log(stringFormat(string).green);
}



function stringFormat(string) {
    string = String(string).trim();
    return string;
}

module.exports = Print;
