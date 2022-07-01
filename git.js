var generateBtn = document.querySelector("#generate");
var captialCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
var special = '@#$!%^&*+?';

// Write password to the #password input
function writePassword() {

  var myPw = captialCase;
  var passwordLgth = window.prompt ("what length would you like your password")
  // Length 8 to 128
    if (passwordLgth >= 8 && passwordLgth <= 128) { 
       // var password = generatePassword();

    var askCapitalcase = prompt ('Would you like capital case?')
      if (askCapitalcase === 'yes') {
        myPw = myPw;
        console.log('capital case', myPw)
      } else {
        myPw = myPw + lowerCase;
      }

    var numberGang = prompt ('Would like numbers?')  
    if (numberGang === 'yes'){
            myPw = myPw + numbers;
            console.log('numbers', numbers)
    }

    var askSpecial = prompt ('Would you like special characters')
    if (askSpecial === 'yes') {
            myPw = myPw + special;
            console.log('special characters', myPw)
    } 
    




var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
