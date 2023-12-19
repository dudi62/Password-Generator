// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];









// Function to prompt user for password options
function getPasswordOptions() {
  var length = Number(prompt("Enter the length of the password. It should be at least 8 characters but no more than 128."));
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid length. Please enter a number between 8 and 128.");
      return;
  }

  var hasLowercase = confirm("Do you want to include lowercase characters?");
  var hasUppercase = confirm("Do you want to include uppercase characters?");
  var hasNumeric = confirm("Do you want to include numeric characters?");
  var hasSpecial = confirm("Do you want to include special characters?");

  if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
      alert("You must select at least one character type.");
      return;
  }

  var passwordOptions = {
      length: length,
      hasLowercase: hasLowercase,
      hasUppercase: hasUppercase,
      hasNumeric: hasNumeric,
      hasSpecial: hasSpecial
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return "";

  if (options.hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUppercase) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  if (options.hasNumeric) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
  }

  for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);