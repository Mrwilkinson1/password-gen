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
        // ASKING A QUESTION USING CONDITIONAL TO = VALUE
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
    
  } else {

  window.alert('Invalid. Try again');
  writePassword();


}    
var passwordoption = myPw.split('');
// CREATE EMPTY ARRAY FOR RESULTS
const result = [];

for (i=0; i < passwordLgth; i++) {
   var number = Math.floor(Math.random() * myPw.length);
   
   var generatePassword = passwordoption[number] ;
   console.log('number', number, 'character', generatePassword)
  //  add elements to array
   result.push(generatePassword)
 }
 const newPassword = result.join('')
 var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

