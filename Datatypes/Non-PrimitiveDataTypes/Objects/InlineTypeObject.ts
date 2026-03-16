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

//Inline Type Object (TS)
const student: { 
  name: string; 
  age: number; 
  grade: string; 
  getSummary: () => string; 
} = { 
  name: "Scott", 
  age: 15, 
  grade: "A", 
  getSummary: function () { 
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`; 
  } 
};

console.log(student.getSummary()); // Output: "Scott is 15 years old and scored grade A"
console.log(student.name); // Output: "Scott"