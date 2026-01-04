//Iterating using the 'for...of' loop (values)
let mixedData: Array<any> = [1, "John", true, null]; // Any type allowed (multi-type array)

for (let value of mixedData) {
    console.log(value); // `value` represents actual array elements
}

