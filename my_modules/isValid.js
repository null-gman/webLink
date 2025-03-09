

const IS_VALID = {};
/***
 * methodes check if the string is can be used ro retarn true or false 
 * : prameters (string)
 * : retarn boolen
 */





IS_VALID.url = (string) => {
  string = String(string);
  string = string.trim();
  if (string === "") return false;
  return true;
}

IS_VALID.filename = (string) => {
  
  string = String(string);
  string = string.trim();
  if (string === "") return false;

  return true;

}


// IS_VALID.dir = (string) => {
//   return true;
// }





module.exports = IS_VALID;













