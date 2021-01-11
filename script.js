// This is my TO-DO LIST

// When you click the button, you are presented with a series of prompts.
  // Create series of prompts 
//When prompted for password criteria, you select what you want to include.

//When you select what password criteria to include, you're prompted for the length of password (8 to 128).

//When prompted for character types, you can choose  lawercase, uppercase, numeric, and /or special characters.
    // I think I need to add all lowercase, uppercase, numbers, and special characters as arrays?
//when you answer each prompt, your input should be validated.

//when all prompts are answered, a password is generated, THEN displayed in an alert or written on page.

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", "," , "?", "."];

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
