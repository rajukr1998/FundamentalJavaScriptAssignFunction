// Function to check if there is a match between a regex pattern and a string
function isMatch(pattern, inputString) {
    const regex = new RegExp(pattern);
    return regex.test(inputString);
}

// Test the function with various patterns and strings
const pattern1 = /\d+/; // Matches one or more digits
const pattern2 = /^[A-Z]/; // Matches uppercase letters at the beginning of the string
const pattern3 = /apple/i; // Case-insensitive match for "apple"
const pattern4 = /\s+/; // Matches one or more whitespace characters

const string1 = "123abc";
const string2 = "Hello, World!";
const string3 = "I love Apples.";
const string4 = "NoSpacesHere";

console.log(`Pattern 1 matches string 1: ${isMatch(pattern1, string1)}`);
console.log(`Pattern 2 matches string 2: ${isMatch(pattern2, string2)}`);
console.log(`Pattern 3 matches string 3: ${isMatch(pattern3, string3)}`);
console.log(`Pattern 4 matches string 4: ${isMatch(pattern4, string4)}`);
