// Function to find matches for specific character classes in a string
function findCharacterClassMatches(inputString) {
    const digitPattern = /\d/g;          // Matches digits
    const uppercasePattern = /[A-Z]/g;    // Matches uppercase letters
    const lowercasePattern = /[a-z]/g;    // Matches lowercase letters
    const specialCharPattern = /[^a-zA-Z0-9]/g; // Matches special characters (non-alphanumeric)

    const digitMatches = inputString.match(digitPattern) || [];
    const uppercaseMatches = inputString.match(uppercasePattern) || [];
    const lowercaseMatches = inputString.match(lowercasePattern) || [];
    const specialCharMatches = inputString.match(specialCharPattern) || [];

    return {
        digits: digitMatches,
        uppercaseLetters: uppercaseMatches,
        lowercaseLetters: lowercaseMatches,
        specialCharacters: specialCharMatches
    };
}

// Test the function with a sample string
const sampleString = "Hello123! World";

const result = findCharacterClassMatches(sampleString);

console.log("Digits:", result.digits);
console.log("Uppercase Letters:", result.uppercaseLetters);
console.log("Lowercase Letters:", result.lowercaseLetters);
console.log("Special Characters:", result.specialCharacters);
