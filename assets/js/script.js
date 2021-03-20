// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var pwlength = prompt ("Entered desired password length between 8 and 128 characters.")
  while (pwlength < 8 || pwlength > 128){
    pwlength = prompt ("Entered desired password length between 8 and 128 characters.")

  }
  
  var password = 'generatePasssword';
  var passwordText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var passwordTextLength = passwordText.length;

  /*before get to this for loop, will need to create a variable that is an empty string at first of potential characters
  === 
  will do a series of if statemenst.  If choice for #'s is true... add #'s to petential string, etc... 

  */
  for ( var i = 0; i < length; i++ ) {
     password += passwordText.charAt(Math.floor(Math.random() * passwordTextLength));
    }
  return password;
  }
 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);