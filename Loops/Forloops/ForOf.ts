/*
iterates over values of iterable objects.
Works with arrays, strings, maps, sets
Returns values directly
*/

const newfruits: string[] = ['apple', 'banana', 'cherry'];

for (const fruit of newfruits) {
    console.log(fruit);
}

//Iterating using the 'for...of' loop (values)
let mixedData: Array<any> = [1, "John", true, null]; // Any type allowed (multi-type array)

for (let value of mixedData) {
    console.log(value); // `value` represents actual array elements
}

