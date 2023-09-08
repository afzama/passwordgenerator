// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLenght = 0;//store password choice here
var expression1 = (passwordChoice <= 128);
var expression2 = (passwordChoice >= 8);
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ['[','`','!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}',';',"'",':','"','\\','|',',','.'];

function generatePassword(){
  for (let index = 8; index < 128; index++) {
    console.log(i, pwdLenght[index]);
    
  }
  //create for loop using math.random
  //Add conditional statement for the lenght which starts with if (passwordlenght >8)
  //if (password lenght < 128) to trigger an event {if pass greater than 128, send message back}
  //conditional statement to check for input value

  //use the confirm method (true or false, boelon value) if user wants lowercase
  //do they want uppercase, numeric values, special characters (all in confirm method) will need var arrays.

  //End function with return statement
  //create object that looks like a json to store passwordOptions {lenght:; specialCharacters} the user selected
  //this object will store the password lenght, and if the user selected special characters (must have one, if none return to function and include conditional statement)

  //Password data to be stored in passwordOptions
  //Create a function that will randomly select variable created earlier
  //create functions for lowercase, uppercase, password lenght
  //could use MAth.random to select a random index from an array

  //make sure you push gathered data from password options object.
  //push data to array, initially this array is empty - call it var generatedPassword = []
  //all information inputted by user will be sent to array
  //concatenate method used here to join multiple strings together
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var passwordChoice = window.prompt ("How long do you want your password to be? (>=8, <=128):");
console.log(passwordChoice)
function lenghtCheck(){
  if(expression1 && expression2 === true){
    console.log(passwordChoice)
  }
  else if(expression1 && expression2 === false){
    window.prompt ("Password must be 8 to 128 characters in lenght")
  }
}
