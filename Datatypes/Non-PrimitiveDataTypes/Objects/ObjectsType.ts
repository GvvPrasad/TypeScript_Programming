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
let employee = { 
  name: "John", 
  age: 30, 
  job: "Engineer" 
};

//calling, Accessing object properties
console.log(employee) //{ name: 'John', age: 30, job: 'Engineer' }
console.log(employee.name)  
console.log(employee["name"])

//Modifying object properties
console.log(employee.name = "Jane") 
;

//adding new properties to the object
employee.department = "IT";
employee.salary = 50000;
console.log(employee);

//removing properties from the object
delete employee.age;
console.log(employee);

//checking if a property exists in the object
console.log(employee.hasOwnProperty("job")) //true
console.log(employee.hasOwnProperty("age")) //false;

//object length
console.log(Object.keys(employee).length) //4

let person = {
  location: "New York",
  experience: 5
}

//Merging two objects using Object.assign()
let mergedObject ={...employee, ...person};
console.log(mergedObject)