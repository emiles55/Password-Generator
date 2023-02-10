// Assignment code here
var lengthOfPassword;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
lengthOfPassword = prompt("How long do you wish the password to be? Must be bettween 8 and 128 characters.")
if(lengthofPassword<8){
lengthOfPassword=prompt("Error. Password needs to be 8 or more characters.");
}
if(lengthOfPassword>128){
  lengthOfPassword=prompt("Error. Password needs to be less than 128 characters.");
}
}