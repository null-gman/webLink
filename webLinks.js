const readline = require('node:readline'),
      fs = require('node:fs'),
      colors = require('colors');

console.log("---WELCOME TO WEBLINKS.JS !!---\n".yellow);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const q = ["title","url"]
let index = 0;

rl.setPrompt(" title: ");
rl.prompt()



rl.on("line",(v)=>{

    function next() {
      q[index] = v;
      index++
    }
    
    if (v == ".exit") {
      process.exit();
    }

    if (q[index] == "url") {
      if (v.search("http") == -1 || v.search(".") == -1 ) {
        console.log("this not an url try again ...".red);
      } else{
        next();
      }
    }else{
      v ? next() : null;
    }

    if (index == q.length) {
      createFile(q[1] , q[0])
      return;
    }



    rl.setPrompt(" "+q[index] + ": ");
    rl.prompt() 

  
})




function createFile(content , name){

  content = 
    `
      <!DOCTYPE html>
      <html><head>
        <meta http-equiv="refresh" content="0;url=${content}">
      </head></html>
    `;

  fs.writeFile(`./${name}.htm`, content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`\n>>file written successfully: '${name}.htm'`.green);
    }

    rl.question(" press enter to exit ... ".gray,()=>rl.close())
  });

}
    
