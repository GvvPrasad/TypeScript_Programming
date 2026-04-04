// Example of a simple callback function in TypeScript

// A callback is a function passed as an argument to another function.
// This allows a function to call another function at a later time.

// Define a function that takes two numbers and a callback function
function addAndHandle(a: number, b: number, callback: (result: number) => void): void {
	const sum = a + b; // Calculate the sum
	callback(sum);     // Call the callback function with the result
}

// Define a callback function that will handle the result
function printResult(result: number): void {
	console.log('The result is:', result);
}


// Call addAndHandle, passing numbers and the named function 'printResult' as a callback
// Even though 'printResult' is a named function, it is still called a callback function in this context
addAndHandle(5, 10, printResult);


/*
Explanation:
1. The function 'addAndHandle' takes two numbers and a callback function as parameters.
2. It calculates the sum of the two numbers.
3. It then calls the callback function, passing the sum as an argument.
4. The callback function can be any function that accepts a number argument, such as 'printResult' or an anonymous function.
5. This pattern is useful for handling results asynchronously or customizing behavior after an operation completes.
*/
