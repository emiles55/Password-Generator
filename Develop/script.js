// Assignment code here
var lengthOfPassword;
var addLowerCase;
var addUpperCase;
var upperCase=["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z"];
var num=["0","1","2","3","4","5","6","7","8","9"];
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


function generatePassword() {
  var lengthOfPassword = (prompt("How many characters would you like your password to contain?"));


  while(lengthOfPassword < 8 || lengthOfPassword > 128) {
      alert("Error. Password needs to be between 8 and 128 characters");
      var lengthOfPassword = (prompt("How many characters would you like your password to contain?"));
    } 

    // Repeat back how many charactes the user will have  
    alert("The number of characters your password will have is "+ lengthOfPassword.toString());
      addUpper= confirm("Will this password be containing upper case letters?");
}

