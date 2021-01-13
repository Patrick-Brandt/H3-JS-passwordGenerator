// This is my TO-DO LIST
    
//when you answer each prompt, your input should be validated.

//I need to get the questions to actually return information, but don't remember how. 'Return.uppercase' or something like that?

//when all prompts are answered, a password is generated, THEN displayed in an alert or written on page.

//Will need to add if/else statements somewhere, but I'm not sure where.
    //Conditional statement somewhere?

//will need to use 'concat' somewhere once they have chosen character types. I think you create a new var,
// and then combime the strings in it.
    // ex: var combo = lowercase.concat(uppercase,numbers); Will look something like this.

//Will need to find a randomizing function. 'Math.random' 'math.floor' or something like that?
    //generate a random password. Something like this. 
      // Get random index from array of options (this is from R,P,Scissors game)
          //var index = Math.floor(Math.random() * options.length);
          //try this:  math.floor(mathrandom() * chosenCharacters.length)] 

//These arrays contain all of the characters that can possibly be used in the password.
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", "," , "?", "."];
var chosenCharacters = [""];
// Maybe I need add this, like in the rock,paper,scissors game? Example below
    //var options= ["lowercase", "uppercase", "numbers", "specialCharacters"],

//This is the minimum and maximum length that the user can choose for their password.
var passwordMax = 128;
var passwordMin = 8;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This is the function that contains the prompts that show up on screen.
function generatePassword(){
  var confirmLower = confirm ("Do you want to use lowercase letters in your password?");
  if (confirmLower) {
    chosenCharacters += lowercase;
    //I'm using a console.log to see if my code is actually working.
    console.log (chosenCharacters)
  }
  var confirmUpper = confirm ("Do you want to use uppercase letters in your password?");
  var confirmNumbers = confirm ("Do you want to use numbers in your password?");
  var confirmSpecial = confirm ("Do you want to use special characters in your password?");
  //If user does not choose any of the above characters, display this alert.
  var confirmLength = prompt ("How many characters do you want in your password? Please choose a number between 8 and 128.");
  
  //If user selects a number that is less than the minimum or more than the maximum, this alert will diplay.
  if (confirmLength<passwordMin || confirmLength>passwordMax) {
    alert("Password is not between 8 and 128 characters!");
  }
    return ""

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
