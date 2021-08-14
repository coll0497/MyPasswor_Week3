// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generator Functions - http://ww.net-comber.com/charset.html
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(Math.floor(Math.random() * 26) + 97)