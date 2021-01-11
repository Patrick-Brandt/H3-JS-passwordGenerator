// This is my TO-DO LIST

// When you click the button, you are presented with a series of prompts.

//When prompted for password criteria, you select what you want to include.

//When you select what password criteria to include, you're prompted for the length of password (8 to 128).

//When prompted for character types, you can choose  lawercase, uppercase, numeric, and /or special characters.

//when you answer each prompt, your input should be validated.

//when all prompts are answered, a password is generated, THEN displayed in an alert or written on page.


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
