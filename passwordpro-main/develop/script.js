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

// Function to generate a password based on user criteria
function generatePassword() {
  // Prompt for password criteria
  var length = parseInt(prompt("Enter the desired length of the password (between 8 and 128 characters):"));

  // Validate the length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return ""; // Return an empty string if the length is invalid
  }

  // Prompt for character types to include
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return ""; // Return an empty string if no character type is selected
  }

  // Define character pools based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Create a pool of characters based on selected criteria
  var characterPool = "";
  if (includeLowercase) {
    characterPool += lowercaseChars;
  }
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  if (includeNumeric) {
    characterPool += numericChars;
  }
  if (includeSpecial) {
    characterPool += specialChars;
  }

  // Generate the password using the character pool
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  // Return the generated password
  return password;
}
