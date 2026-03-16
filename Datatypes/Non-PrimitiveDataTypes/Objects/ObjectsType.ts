/*An object is a collection of key-value pairs. Objects can represent real-world entities, such as a person, a car, or a book, and they can have properties (attributes) and methods (functions) associated with them.
Creating an object using object literal syntax
*/

/*
Different Ways to Create Objects in TS/JS 
1. Using object type (JS/TS) 
2. Inline Type Object (TS) 
3. Using type aliases (TS) 
4. Using Classes (JS/TS)
*/

//Using object type (JS/TS)
let employee: object = { 
  name: "John", 
  age: 30, 
  job: "Engineer" 
};

//calling object
console.log(employee) //{ name: 'John', age: 30, job: 'Engineer' }
console.log(employee.name)  //Error: Property 'name' does not exist on type 'object'.
console.log(employee["name"]) //Error: Element implicitly has an 'any' type because expression of type '"name"' can't be used to index type 'object'. No index signature with a parameter of type 'string' was found on type 'object'.