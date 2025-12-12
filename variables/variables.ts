//single line comment
//curl+/

/* multi line comments shift+Alt+A */

//TS is a statically typed programing languale 

//valiable keywords in TS
/*
var: It scope to function & avoide using it as it can give unexpected errors 
Let, const: It's scope is limited to block
*/

console.log('Hello....New file')

//Var example
function exampleVar() { 
    if (true) { 
        var message = "This is var from function"; 
    } 
    console.log(message); // Works! (function-scoped) 
} 
exampleVar(); // Output: "Hello, World!"

//Let, const example
function exampleLetConst() { 
    if (true) { 
        let message = "Let from a block"; 
        const greeting = "Const from a block"; 
        console.log(message);
        console.log(greeting); 
    } 
   // console.log(message);  // Error: Not accessible outside block 
    // console.log(greeting); // Error: Not accessible outside block 
} 
exampleLetConst();