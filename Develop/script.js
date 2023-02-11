// Assignment code here
var lengthOfPassword;
var addLowerCase;
var addUpperCase;
var addSpecialCharacters;
var addNumbers;
var passwordArray=[];
var upperCase=["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z"];
var num=["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters=["!", "@","#","$","%","^","\&","*","(",")","-","+","=",".","?"];
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
  lengthOfPassword = (prompt("How many characters would you like your password to contain?"));
while(!lengthOfPassword){
  alert("Please enter a valid number.");
  lengthOfPassword = (prompt("How many characters would you like your password to contain?"));
}

  while(lengthOfPassword < 8 || lengthOfPassword > 128) {
      alert("Error. Password needs to be between 8 and 128 characters");
      lengthOfPassword = (prompt("How many characters would you like your password to contain?"));
    } 

     
    alert("The number of characters your password will have is "+ lengthOfPassword.toString());
      addUpperCase= confirm("Will this password be containing upper case letters?");
      addLowerCase= confirm("Will this password be containing lower case letters?");
      addSpecialCharacters= confirm("Will this password be containing special characters.");
      addNumbers= confirm("Will this password contain numbers?");
      if(addUpperCase && addLowerCase && addNumbers && addSpecialCharacters){
passwordArray.concat(upperCase, lowerCase, num, specialCharacters);
      }
}

