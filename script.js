var generateBtn = document.querySelector("#generate");
var captialCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
var special = '@#$!%^&*+?';

// Write password to the #password input
function writePassword() {

var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
