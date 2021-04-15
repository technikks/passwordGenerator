// Starting function to alert intructions and for the first criteria - character amount
function start() {
    alert(`INSTRUCTIONS: \n1. You must indicate an amount of characters between 8 and 128 for your password. \n2. You must select at least one of the following criteria for your password: \n  - Uppercase \n  - Lowercase \n  - Special Characters \n  - Numbers`); 
};

// First Criteria - Character Amount 
var charAmount = prompt(`How many characters would you like to have for your password? Please enter a numerical value between 8 and 128.`)
if ((isNaN(charAmount)) || (charAmount < 8) || (charAmount > 128) || (charAmount === null)) {
    alert(`You did not enter a numerical value between 8 and 128. Please try again.`);
    start();
} else if ((isNaN(charAmount) === false) || (charAmount >= 8) || (charAmount <= 128)) {
    console.log(`Amount Characters: ${charAmount}`);
};
start();


// Arrays for criterias
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numbersArray = "0123456789".split("");


// Confirm second criteria - Uppercase
var uppercase = confirm(`Would you like to include any uppercase?`) 
    console.log(`Include Uppercase: ${uppercase}`);
            
// Confirm third criteria - Lowercase
var lowercase = confirm(`Would you like to include any lowercase?`); 
        console.log(`Include Lowercase: ${lowercase}`);
    
// Confirm fourth criteria - Special Character
var specialChar = confirm(`Would you like to include any special characters?`); 
    console.log(`Include Special Characters: ${specialChar}`); 
    
// Confirm fifth criteria - Numbers
var numbers = confirm(`Would you like to include any numbers?`); 
    console.log(`Include Numbers: ${numbers}`); 

criteriaCheck()


// Function to check whether user confirmed at least one of either uppercase, lowercase, special characters, or numbers to include in the password. 
function criteriaCheck() {
    if (uppercase === false && lowercase === false && specialChar === false && numbers === false) {
        alert(`You did not pick at least one of the criteria (uppercase, lowercase, special characters, or numbers) to be included in your password. Please try again.`); 
    } 
    start();
}

// Creates arrays based on users input
var inputArray = [];

if (uppercase === true) {
    inputArray = inputArray.concat(uppercaseArray); 
}
if (lowercase === true) {
    inputArray = inputArray.concat(lowercaseArray); 
}

if (numbers === true) {
    inputArray = inputArray.concat(numbersArray); 
}

if (specialChar === true) {
    inputArray = inputArray.concat(specialCharArray);
}
console.log(inputArray); 