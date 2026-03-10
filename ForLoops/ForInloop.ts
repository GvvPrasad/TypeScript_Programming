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