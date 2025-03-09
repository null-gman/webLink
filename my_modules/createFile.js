const fs = require('node:fs');
const Print = require("./print.js");


/*
  - CreateFile obj give a method take two arg fileName , weblink url to create a html file that locathion replace to that url;
*/


function createHtmlContaint(webSiteUrl) {
  webSiteUrl = String(webSiteUrl).trim();

  if (!webSiteUrl) {
    return "error in webSiteUrl";
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hello ,world</title>
  <script>
    location.replace("${webSiteUrl}");
  </script>
</head>
</html>`

}

const CreateFile = {};

CreateFile.webLink = (fileName, webSiteUrl) => {
  const CONTENT = createHtmlContaint(webSiteUrl);

  const fullname = `${fileName}.html`;
  return new Promise((resolve) => {


    fs.writeFile(fullname, CONTENT, (err) => {
      if (err) {
        const msg = Print.red(`>> error with creating a '${fullname}'`);
        console.log(msg);
        resolve(0)
        return;
      }
      const msg = Print.green(`>> '${fullname}' was created`);
      console.log(msg);
      resolve(1)
    })
  })


}

module.exports = CreateFile;
