function generatePassword() {
  let array = [];
  let numberChars = "0123456789";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = "abcdefghiklmnopqrstuvwxyz";

  let passwordLength = randomInteger(6, 20);
  let password = arrayRandElement(numberChars) + arrayRandElement(upperChars) + arrayRandElement(lowerChars);

  array = array.concat(numberChars.split(""))
    .concat(upperChars.split(""))
    .concat(lowerChars.split(""))

  while (password.length < passwordLength) {
    password += array[randomInteger(0, array.length - 1)];
  }
  return password;
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function arrayRandElement(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

console.log("Password generator: ")
console.log(generatePassword())
console.log("");