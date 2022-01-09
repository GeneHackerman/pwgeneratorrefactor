// Assignment code here
function generatePassword() {
  var passwordLength = 0;
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var specialCharacter = "!@#$%^&*()";
  var allChars = upperCase + lowerCase + numeric + specialCharacter;
  
  // this code generates the random password
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = upperCase;
  randPasswordArray[1] = lowerCase;
  randPasswordArray[2] = numeric;
  randPasswordArray[3] = specialCharacter;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
  return shuffleArray(randPasswordArray.map(function(string) { return string[Math.floor(Math.random() * string.length)] })).join('');


  // this function will produce ONLY a 4 character pw currently
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); 
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    } 
    
    // insert while loop here. after prompts, pw is generated
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = window.prompt("Please choose your length for password between 8 and 128 characters");
      if (passwordLength < 8 || passwordLength > 128) 
        window.alert("Please enter a number between 8 and 128");
    }
    
    while (upperCase !== "yes" && upperCase !== "no") {
      upperCase = window.prompt("Would you like to include uppercase characters?");
      upperCase.toLowerCase();
      if (upperCase !== "yes" && upperCase !== "no")
        window.alert("Please enter either 'yes' or 'no'.");
    }
  
    while (lowerCase !== "yes" && lowerCase !== "no") {
      lowerCase = window.prompt("Would you like to include lowercase characters?");
      lowerCase.toLowerCase();
      if (lowerCase !== "yes" && lowerCase !== "no")
        window.alert("Please enter either 'yes' or 'no'.");
    } 
  
    while (numeric !== "yes" && numeric !== "no") {
      numeric = window.prompt("Would you like to include a number?");
      numeric.toLowerCase();
      if (numeric !== "yes" && numeric !== "no")
        window.alert("Please enter either 'yes' or 'no'.");
    }
  
    while (specialCharacter !== "yes" && specialCharacter !== "no") {
      specialCharacter = window.prompt("Would you like to include special characters?");
      specialCharacter.toLowerCase();
      if (specialCharacter !== "yes" && specialCharacter !== "no")
        window.alert("Please enter either 'yes' or 'no'.");
    }

  console.log(passwordLength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numeric);
  console.log(specialCharacter);
  




    return array;
    //return upperCase + lowerCase + numeric + specialCharacter;
  }  

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
