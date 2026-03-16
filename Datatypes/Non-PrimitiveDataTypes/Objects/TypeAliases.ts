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

// Using type aliases (TS)
type Product = { 
  name: string; 
  price: number; 
  getInfo: () => string; 
};

let book1: Product = { name: "Scott", price: 29.99, getInfo: function () { return `${this.name} costs $${this.price}`; } };
let book2: Product = { name: "Alice", price: 19.99, getInfo: function () { return `${this.name} costs $${this.price}`; } };

console.log(book1.getInfo()); // Output: Scott costs $29.99
console.log(book2.name); // Output: Alice