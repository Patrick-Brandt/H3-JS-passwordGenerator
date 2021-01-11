// This is my TO-DO LIST

// When you click the button, you are presented with a series of prompts (confirms).
  
//When prompted for password criteria, you select what you want to include.

//When you select what password criteria to include, you're prompted for the length of password (8 to 128).
  //add a prompt, so user can add input (confirm is just a yes/no).
//When prompted for character types, you can choose  lawercase, uppercase, numeric, and /or special characters.
    
//when you answer each prompt, your input should be validated.
  //Add a question for if they put in incorrect InputDeviceInfo.
//when all prompts are answered, a password is generated, THEN displayed in an alert or written on page.

//Will need to add if/else statements somewhere, but I'm not sure where.
//Conditional statement somewhere?

//Will need to find a randomizing function. 'Math.random' 'math.floor' or something like that?
    //generate a random password. Something like this. (Found on geeks for geeks.org) 
    //for (int i =0; i<10; i++){ int rand= (int)(math.random() * range) +min;
    // System.out.println(rand);}}   } 

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", "," , "?", "."];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var confirmLower = confirm ("Do you want to use lowercase letters in your password?");
  var confirmUpper = confirm ("Do you want to use uppercase letters in your password?");
  var confirmNumbers = confirm ("Do you want to use numbers in your password?");
  var confirmSpecial = confirm ("Do you want to use special characters in your password?");
  var confirmLength = prompt ("How many characters do you want in your password? Please choose a number between 8 and 128.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
