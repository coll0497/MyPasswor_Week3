// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

 let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]+<>?,.";

 let password = "";
 for(var i = 1; i <= 15; i++){
   password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
 }

console.log(password)


;