/**
 For in loop is used to iterate over the key/properties of an object. 
 It is used to loop through the properties of an object and it returns the keys of the object.
 */

 const user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

for (let key in user) {
  console.log(key);
}


//Iterating using the 'for...in' loop (indexes)
let employees: Array<number> = [101, 102, 103, 104]; // Only numbers allowed

for (let index in employees) {
    console.log(employees[index]); // `index` represents array indices
}
