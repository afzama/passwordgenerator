// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordOptions = 0; //store password choice here
var characterOptions = ""; //store characters here
var generatedPassword = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * passwordLength.length);
  password += characterType[randomIndex] * specialCharacter,numberOptions.length;
  password += letterType [randomIndex] * lowerCase,upperCase.length;
}
return password;

var characterType = {
specialCharacter: "[","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}",";","'",":",'"',"\\","|",",",".",
numberOptions: 0,1,2,3,4,5,6,7,8,9
}
var letterType = {
lowerCase: "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
upperCase: "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
}

function generatePassword() {
  var passwordLength = window.prompt(
    "How long do you want your password to be? (>=8, <=128):"
  );
  console.log(passwordLength);
    if (passwordLength <= 128 && passwordLength >= 8) {
      console.log("Password lenght is valid");
    } else {
      alert("Password must be between 8 and 128 characters");
      return;
    }

function characterType () {
  var characterChoice = window.prompt (
    "Do you want character types included in your password? (Note, for a secure password, use a combination of numbers and symbols):")
  console.log (characterChoice);
  if (characterChoice == true) {
    console.log("Randomized character types will be included");
  } else {
    alert("Please include at least one number and one symbol");
    return;
  }
}

function letterType () {
  var letterChoice = window.prompt ("How many lower case letters do you want included? (Note, to provide a secure password, this generator will randomize upper and lower case letters")
console.log (letterChoice);
if (letterChoice >=8 && letterChoice <=128 ) {
  console.log("Amount of letters cannot exceed submitted password lenght. Please select an amount of" + passwordOptions);
} else {
  alert ("Randomized letters will be included");
  return;
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);