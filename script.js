// Starting function to alert intructions when user clicks "Click Me to Start" and for the first criteria - character amount
function start() {
    alert(`INSTRUCTIONS: \n1. You must indicate an amount of characters between 8 and 128 for your password. \n2. You must select at least one of the following criteria for your password: \n  - Uppercase \n  - Lowercase \n  - Special Characters \n  - Numbers`); 

    // First Criteria - Character Amount 
    var charAmount = prompt(`How many characters would you like to have for your password? Please enter a numerical value between 8 and 128.`)
    if ((isNaN(charAmount)) || (charAmount < 8) || (charAmount > 128) || (charAmount === null)) {
        alert(`You did not enter a numerical value between 8 and 128. Please try again.`);
        start();
    } else if ((isNaN(charAmount) === false) || (charAmount >= 8) || (charAmount <= 128)) {
        console.log(`Amount Characters: ${charAmount}`);
        criteria(); 
    };  
    return start
};


// Function to ask user to include uppercase, lowercase, special characters, or numbers in password
function criteria(uppercase, lowercase, specialChar, numbers) {
    // Second Criteria - Uppercase
    var uppercase = confirm(`Would you like to include any uppercase?`) 
        console.log(`Include Uppercase: ${uppercase}`);
            
    // Third Criteria - Lowercase
    var lowercase = confirm(`Would you like to include any lowercase?`); 
        console.log(`Include Lowercase: ${lowercase}`);
    
    // Fourth Criteria - Special Character
    var specialChar = confirm(`Would you like to include any special characters?`); 
        console.log(`Include Special Characters: ${specialChar}`); 
    
    // Fifth Criteria - Numbers
    var numbers = confirm(`Would you like to include any numbers?`); 
        console.log(`Include Numbers: ${numbers}`); 

    criteriaCheck()

    // Function to check whether user confirmed at least one of either uppercase, lowercase, special characters, or numbers to include in the password. 
    function criteriaCheck() {
        if (uppercase == true || lowercase == true || specialChar == true || numbers == true) {
            alert(`Click "OK" to see your password!`);
            // Function to generate password
            function generatePassword(charAmount, lowercase, specialChar, numbers) {
                var passwordCodes = uppercaseCharCodes
                if (lowercase == true) {
                    passwordCodes = passwordCodes.concat(lowercaseCharCodes)
                }
                if (specialChar == true) {
                    passwordCodes = passwordCodes.concat(specialCharCodes)
                }
                if (numbers == true) {
                    passwordCodes = passwordCodes.concat(numberCharCodes)
                }

                var passwordChar = []
                for (var i = 0; i < charAmount; i++) {
                    var characterCode = passwordCodes[Math.floor(Math.random() * passwordCodes.length)];
                    passwordChar.push(String.fromCharCode(characterCode))
                }
                return passwordChar.join(``)
            }
        } else {
            alert(`You did not pick at least one of the criteria (uppercase, lowercase, special characters, or numbers) to be included in your password. Please try again.`);
            criteria();
        }
    };
    return criteria
};

// Function matching the uppercase, lowercase, special characters, and numbers criteria to their ASCII Character Codes 
function charCodeArray(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
        array.push(i)
    }
    return array
};

// Using the charCodeArray function to create arrays for each criteria (uppercase, lowercase, special characters, and numbers)
var uppercaseCharCodes = charCodeArray(65, 90);
var lowercaseCharCodes = charCodeArray(97, 122);
var specialCharCodes = charCodeArray(32, 47).concat(charCodeArray(58, 64)).concat(charCodeArray(91, 96)).concat(charCodeArray(123, 126));
var numberCharCodes = charCodeArray(48, 57);

