const FORMAT = {};

FORMAT.fileName = (string) => {
  return formatSTring(string);
}

FORMAT.url = (string) => {
  return  formatSTring(string);
}


FORMAT.dir = (string) => {
  if (!string) {
    return getDir();
  }

  string = formatSTring(string);
  return string;
}


function getDir() {
  // let dir = process.argv[1].split("\\");
  // let newDir = [];

  // for (let i = 0; i < dir.length - 1; i++) {
  //   newDir.push(dir[i]);
  // }
  // newDir =  newDir.join("\\");

  // return newDir;
  const dir = process.cwd();
  return dir;
}


function formatSTring (string){
  let res = "";
  for (const char of string) {
    if (char === " ") {
      res += "_";
      continue;
    }
    if (char === "'" || char === '"') {

      continue;
    }
    res += char;
  }
  return res;
}

module.exports = FORMAT;