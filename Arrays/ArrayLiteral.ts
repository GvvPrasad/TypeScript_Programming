// Declaration
let names: string[] = []; 

// Initializing values into the array
names[0] = "John";  // or names.push("John");
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott";

// Alternative way to declare and initialize an array
let namestwo: string[] = ["John", "Smith", "Peter", "Scott"];

// Printing the array
console.log(names); // Output: [ 'John', 'Smith', 'Peter', 'Scott' ]
console.log(names[1]); // Output: Smith
console.log(names[4]); // Output: undefined (index out of range)
