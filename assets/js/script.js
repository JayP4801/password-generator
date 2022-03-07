// Assignment code here 
// *********************

// function to generate password after button click
function generatePassword(){
  var password = "";
  var passwordLength = 0;
  var passwordLengthPrompt = window.prompt('Please choose password length between 8 - 128 characters long.');
  var characters = "";

  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128){
    passwordLength = passwordLengthPrompt;
  } else{
    window.alert("Please select between 8 - 128 characters");
    return generatePassword();
  };

  // ask user if password should include lowercase letters
  const lower = "abcdefghijklmnopqrstuvwxyz";
  var lowercasePrompt = window.prompt('Do you want to include lowercase letters? Type "Y" for YES or "N" for NO');
  switch(lowercasePrompt){
    case "Y":
    case "y":
      characters += lower;
      break;
    case "N":
    case "n":
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
    generatePassword();
  };

  // ask user if password should include uppercase letters
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercasePrompt = window.prompt('Do you want to include uppercase letters? Type "Y" for YES or "N" for NO');
  switch(uppercasePrompt){
    case "Y":
    case "y":
      characters += upper;
      break;
    case "N":
    case "n":
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      generatePassword();
  };

  // ask user if password should include numbers
  const number = "1234567890";
  var numberPrompt = window.prompt('Do you want to include numbers? Type "Y" for YES or "N" for NO');
  numberPrompt = numberPrompt;
  switch(numberPrompt){
    case "Y":
    case "y":
      characters += number;
      break;
    case "N":
    case "n":
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      generatePassword();
  };

  // ask user if password should include special characters
  const special = "!@#$%^&*_-+=";
  var specialCharacterPrompt = window.prompt('Do you want to include special characters? Type "Y" for YES or "N" for NO');
  switch(specialCharacterPrompt){
    case "Y":
    case "y":
      characters += special;
      break;
    case "N":
    case "n":
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      generatePassword();
  };

  // for loop to randomize password character order
  for (var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

