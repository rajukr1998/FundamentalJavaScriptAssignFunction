// Function to extract specific parts of the matched text using groups
function extractPartsUsingGroups(pattern, inputString) {
    const regex = new RegExp(pattern);
    const match = regex.exec(inputString);

    if (match) {
        // Extracted parts using groups
        const groups = match.slice(1);

        return {
            isMatch: true,
            matchedText: match[0],
            groups: groups
        };
    } else {
        return {
            isMatch: false,
            matchedText: null,
            groups: null
        };
    }
}

// Test the function with a sample string and date pattern
const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const sampleDateString = "28-01-2024";

const result = extractPartsUsingGroups(datePattern, sampleDateString);

if (result.isMatch) {
    console.log(`Matched Text: ${result.matchedText}`);
    console.log(`Day: ${result.groups[0]}`);
    console.log(`Month: ${result.groups[1]}`);
    console.log(`Year: ${result.groups[2]}`);
} else {
    console.log("No match found.");
}
