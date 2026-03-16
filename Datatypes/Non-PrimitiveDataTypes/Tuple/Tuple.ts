//Tuple
/* A tuple is a fixed-length array where each position has a specific type.
In TypeScript, you can define a tuple using square brackets [] and specify the types of each element.

assignment of values to a tuple must match the defined types and order. For example, if you have a tuple defined as [number, string, boolean], you must assign a number to the first position, a string to the second position, and a boolean to the third position. If you try to assign values that do not match the defined types or order, TypeScript will throw an error.
*/

let employee: [number, string, boolean] = [1, "John", true]; 
console.log(employee); // Output: [ 1, 'John', true ]
console.log(employee[0]); // Output: 1