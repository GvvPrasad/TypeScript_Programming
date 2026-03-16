/*
String is declared using:
1. Single quotes 'like this'
2. Double quotes "like this"
3. Backticks (Template literals) `like this` – useful when embedding variables inside
strings.

Backticks allow template literals, which support string interpolation using ${}:
*/

let num: number = 10;
console.log(`Number is: ${num}`); // Correct way
console.log('Number is: ${num}'); // Incorrect, will print the literal string

// String methods

let str: string = "Hello, World!";
console.log(str.length); // Length of the string
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.includes("World")); // Check if substring exists
console.log(str.indexOf("o")); // Get index of first occurrence of 'o'
console.log(str.lastIndexOf("o")); // Get index of last occurrence of 'o'
console.log(str.charAt(0)); // Get character at index 0
console.log(str.substring(0, 5)); // Get substring from index 0 to 5 (exclusive)
console.log(str.split(", ")); // Split the string into an array using ", " as the separator
console.log(str.replace("World", "TypeScript")); // Replace "World" with "TypeScript"  
console.log(str.trim()); // Remove whitespace from both ends of the string  
console.log(str.startsWith("Hello")); // Check if string starts with "Hello"
console.log(str.endsWith("!")); // Check if string ends with "!"
console.log(str.repeat(2)); // Repeat the string 2 times
console.log(str.slice(0, 5)); // Get a section of the string from index 0 to 5 (exclusive)
console.log(str.split("o")); // Split the string at each occurrence of 'o'
console.log(str.match(/o/g)); // Get all occurrences of 'o' in the string
console.log(str.search("World"));
console.log(str.concat(" How are you?")); // Concatenate another string
console.log(str.padStart(20, "*")); // Pad the string at the start with '*' to a total length of 20
console.log(str.padEnd(20, "*")); // Pad the string at the end with '*' to a total length of 20
console.log(str.replaceAll("o", "0")); // Replace all occurrences of 'o' with '0'

//String Immutability
//Strings are immutable – once created, they can’t be changed. Methods return new strings:
let original = "Hello";
let modified = original.concat(", World!");
// original is still "Hello"
console.log(original); // Output: Hello
console.log(modified); // Output: Hello, World!