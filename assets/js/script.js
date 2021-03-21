
// array of variables to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Function to prompt user for password options
function getPasswordOptions() {
  
    var length = prompt ("Entered desired password length between 8 and 128 characters.")
    while (length< 8 || length> 128){
      length= prompt ("INVALID! Entered desired password length between 8 and 128 characters.")
  
    }     

  // Variable and prompt to include in password.
  var hasSpecialCharacters = confirm("Press 'OK' to include special characters ($#@).");
  var hasNumericCharacters = confirm("Press 'OK' to include numbers.");
  var hasLowerCasedCharacters = confirm("Press 'OK' to include lowercase letters.");
  var hasUpperCasedCharacters = confirm("Press 'OK' to include UPPERCASE letters.");

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('INVALID! Must select at least one character type!');
    return;
  }

  // Object to store input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  
//if statements to generate characters for password
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
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


var generateBtn = document.querySelector('#generate');
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

