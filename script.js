// Assignment Code
var generateBtn = document.querySelector("#generate");

//var characterType = {
const specialCharacter = ["[", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", "", "|", ",", "."]
const numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//}
//var letterType = {
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//}

function generatePassword(lenght) {
  const allCharacters = lowerCase + upperCase + specialCharacter + numberOptions;
  let password = '';

  var passwordLength = parseInt(window.prompt(
    "How long do you want your password to be? (>=8, <=128):"
  ));
  console.log(passwordLength);
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password must be between 8 and 128 characters");
    return;
  } else {
    console.log("Password lenght is not valid");
  }

  var characterChoice = window.confirm(
    "Do you want special characters included in your password? (Note, for a secure password, use a combination of numbers and symbols):")
  console.log(characterChoice);

  var numberChoice = window.confirm(
    "Do you want numbers included in your password? (Note, for a secure password, use a combination of numbers and symbols):")
  console.log(numberChoice);

  var lowercaseChoice = window.confirm(
    "Do you want lower case letters included in your password? (Note, for a secure password, use a combination of numbers and symbols):")
  console.log(lowercaseChoice);

  var uppercaseChoice = window.confirm(
    "Do you want upper case letters included in your password? (Note, for a secure password, use a combination of numbers and symbols):")
  console.log(uppercaseChoice);

  if (characterChoice || numberChoice || lowercaseChoice || uppercaseChoice) {
    console.log("Randomized character types will be included");
  } else {
    alert("Please include at least one number and one symbol");
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.lenght);
    password += allCharacters[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);