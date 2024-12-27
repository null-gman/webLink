const Print = require("./my_modules/print.js"); /* Ptint object to console.log with colors */
const Input = require("./my_modules/input.js"); /*Input object return an promece act like input in python with check vlue */
const CreateFile = require("./my_modules/createFile.js"); /*  CreateFile obj give a method take two arg fileName , weblink url */


async function main() {
  Print.green("---WELLCOM TO WEBLINKS 2.0.0 ---\n\0");

  const { url, dir_name } = await getInputs();

  await CreateFile.webLink(dir_name, url);

  await Input.exit();

}

main();


function getInputs() {
  const DataObj = {};
  return new Promise(async (resolve) => {

    DataObj.dir = await Input.dir()
    DataObj.fileName = await Input.fileName();
    DataObj.url = await Input.url();
    console.log(); //break line after inputs

    DataObj.dir_name = DataObj.dir + "\\" + DataObj.fileName;
    resolve(DataObj);
  })

}

