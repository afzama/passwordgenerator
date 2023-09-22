//Click button to generate password
var generateBtn = document.querySelector("#generate");

//variable arrays
const specialCharacter = ["[", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", "|", ",", "."];
const numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//password criteria prompts
function generatePassword() {
  var passwordLength = parseInt(window.prompt(
    "How long do you want your password to be? (>=8, <=128):"
  ));

  if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return '';
  }

  var characterChoice = window.confirm(
    "Do you want special characters included in your password? (Note, for a secure password, use a combination of numbers and symbols):"
  );

  var numberChoice = window.confirm(
    "Do you want numbers included in your password? (Note, for a secure password, use a combination of numbers and symbols):"
  );

  var lowercaseChoice = window.confirm(
    "Do you want lower case letters included in your password? (Note, for a secure password, use a combination of numbers and symbols):"
  );

  var uppercaseChoice = window.confirm(
    "Do you want upper case letters included in your password? (Note, for a secure password, use a combination of numbers and symbols):"
  );

  if (!characterChoice && !numberChoice && !lowercaseChoice && !uppercaseChoice) {
    alert("Please include at least one character type.");
    return '';
  }

  //all prompts answered, validating input
  let allCharacters = [];
  if (characterChoice) allCharacters = [...allCharacters, ...specialCharacter];
  if (numberChoice) allCharacters = [...allCharacters, ...numberOptions];
  if (lowercaseChoice) allCharacters = [...allCharacters, ...lowerCase];
  if (uppercaseChoice) allCharacters = [...allCharacters, ...upperCase];

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  return password;
}

//password generated to match criteria
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//display generated password
generateBtn.addEventListener("click", writePassword);
