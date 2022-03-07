// Assignment code here 
// *********************

function generatePassword(){
  var password = "";
  var passwordLength = 0;
  var passwordLengthPrompt = window.prompt("Please choose password length between 8 - 128 characters long.");
  var characters = "";

  if (passwordLengthPrompt > 7 && passwordLengthPrompt < 128){
    passwordLength = passwordLengthPrompt;
  } else{
    window.alert("Please select between 8 - 128 characters");
    return generatePassword();
  };

  const lower = "abcdefghijklmnopqrstuvwxyz";
  var lowercasePrompt = window.prompt("Do you want to include lowercase letters?");
  switch(lowercasePrompt){
    case "YES":
    case "yes":
      characters += lower;
      break;
    case "NO":
    case "no":
      break;
  };

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercasePrompt = window.prompt("Do you want to include uppercase letters?");
  switch(uppercasePrompt){
    case "YES":
    case "yes":
      characters += upper;
      break;
    case "NO":
    case "no":
      break;
  };

  const number = "1234567890";
  var numberPrompt = window.prompt("Do you want to include numbers?");
  numberPrompt = partInt(numberPrompt);
  switch(numberPrompt){
    case "YES":
    case "yes":
      characters += number;
      break;
    case "NO":
    case "no":
      break;
  };

  const special = "!@#$%^&*_-+=";
  var specialCharacterPrompt = window.prompt("Do you want to include special characters?");
  switch(specialCharacterPrompt){
    case "YES":
    case "yes":
      characters += special;
      break;
    case "NO":
    case "no":
      break;
  };

  return passwordLength;

  
};
// prompt for length of the password

// confirm to include lowercase letters

// confirm to include uppercase letters

// confirm to include numbers

// confirm to include special characters

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

