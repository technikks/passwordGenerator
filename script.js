// Link generate password button from HTML
var generateBtn = document.querySelector("#generate"); 


// Setting password array to an empty array 
var passwordArray = [];


// Arrays for password criterias
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numbersArray = "0123456789".split("");


// Function to write password and display in #password of HTML
function writePassword() {
    var password = generatePassword();
    var randomPassword = document.querySelector("#password");
    randomPassword.value = password;


    // Function to generate password 
    function generatePassword() {
      alert(`INSTRUCTIONS: \n1. You must indicate an amount of characters between 8 and 128 for your password. \n2. You must select at least one of the following criteria for your password: \n  - Uppercase \n  - Lowercase \n  - Special Characters \n  - Numbers`);


      // First Criteria - Character Amount 
      var charAmount = prompt(`How many characters would you like to have for your password? Please enter a numerical value between 8 and 128.`);
  
      
      // Parse integer so user's string-based entry becomes a number that can be used later in loop iterations
      charAmount = parseInt(charAmount);
      console.log(charAmount);
  

      // If else statement ensuring user input is valid
      if ((isNaN(charAmount) === false) || (charAmount >= 8) || (charAmount <= 128)) {
        
        
        // Second Criteria - Numbers
        var numbers = confirm("Would you like to include numbers in your password?");
        
        
        // Add numbers array to password array if user confirms to have numbers in the password
        if (numbers === true) {
          passwordArray = passwordArray.concat(numbersArray);
          console.log(passwordArray);
        }
        else {
          numbers === false;
        }
  

        // Third Criteria - Special Characters
        var specialChar = confirm("Would you like to have special characters in your password?");


         // Add special characters array to password array if user confirms to have numbers in the password
        if (specialChar === true) {
          passwordArray = passwordArray.concat(specialCharArray);
          console.log(passwordArray);
        }
        else {
           specialChar === false;
        }
  

        // Fourth Criteria - Uppercase Letters
        var uppercase = confirm("Would you like to have uppercase letters in your password?");
        
        
        // Add uppercase array to password array if user confirms to have numbers in the password
        if (uppercase === true) {
          passwordArray = passwordArray.concat(uppercaseArray);
          console.log(passwordArray);
        }
        else {
           uppercase=== false;
        }
  

        // Fifth Criteria - Lowercase Letters
        var lowercase = confirm("Would you like to havelowercase letters in your password?");


        // Add lowercase array to password array if user confirms to have numbers in the password
        if (lowercase === true) {
          passwordArray = passwordArray.concat(lowercaseArray);
          console.log(passwordArray);
        }
        else {
          lowercase === false;
        }
  

        // Console log the password array based on indicated criteria
        console.log(passwordArray);
  

        // If statement to check whether user confirmed at least one of either uppercase, lowercase, special characters, or numbers to include in the password. 
        if (numbers === false && specialChar === false && uppercase === false && lowercase === false) {
          alert(`You did not pick at least one of the criteria (uppercase, lowercase, special characters, or numbers) to be included in your password. Please try again.`);
          return randomPassword;
        }
  

        // Else statement to proceed if user confirmed at least one of either uppercase, lowercase, special characters, or numbers to include in the password. 
        else {
          var randomPassword = "";
          for (var i = 0; i < charAmount; i++) {
            var password = Math.floor(Math.random() * passwordArray.length);
            randomPassword += passwordArray[password];
          }
          

          // Display generated password 
          console.log(randomPassword);
          return randomPassword;
        }
      }


      // If user did not indicate a number between 8 and 128 for characters amount
      else {
        alert(`You did not enter a numerical value between 8 and 128. Please try again.`);
      }
    }
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); {
      
  }