//Iterating using the 'for...in' loop (indexes)
let empIds: Array<number> = [101, 102, 103, 104]; // Only numbers allowed

for (let index in empIds) {
    console.log(empIds[index]); // `index` represents array indices
}
