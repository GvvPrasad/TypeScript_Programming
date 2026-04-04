let sentence:string="Hello! Welcome to TypeScript";
let word:string="programming";

//CharAt: Returns the character at a specified index in a string
console.log(sentence.charAt(8));

//Concat: Combines two or more strings into one
console.log(sentence.concat(word));

//endsWith: Checks if a string ends with a specified substring
console.log(sentence.endsWith("!"));

//includes: Checks if a string contains a specified substring
console.log(sentence.includes("Welcome"));

//indexOf: Returns the index of the first occurrence of a specified substring
console.log(sentence.indexOf("e"));

//lastIndexOf: Returns the index of the last occurrence of a specified substring
console.log(sentence.lastIndexOf("e"));

//match: Searches a string for a match against a regular expression and returns the matches
console.log(sentence.match(/abc/g));

//replace: Replaces a specified value with another value in a string
console.log(sentence.replace("Hello", "Hi"));

//search: Searches a string for a specified value and returns the position of the match
console.log(sentence.search("Welcome"));

//slice: Extracts a section of a string and returns it as a new string
console.log(sentence.slice(0, 5));

//split: Splits a string into an array of substrings based on a specified separator
console.log(sentence.split(" "));

//substring: Returns a portion of the string between the start and end indexes
console.log(sentence.substring(0, 5));

//toLowerCase: Converts a string to lowercase letters
console.log(sentence.toLowerCase());

//toUpperCase: Converts a string to uppercase letters
console.log(sentence.toUpperCase());