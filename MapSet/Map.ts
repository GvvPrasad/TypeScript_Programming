//It allows us to store data in a key-value pair and remembers the original insertion order of the keys. In TypeScript map, we can use any value either as a key or as a value.

const userRoles = new Map<string , string>();  
userRoles.set("admin", "Full Access");  
userRoles.set("editor", "Edit Access");  
  

//get entire map
console.log("User Roles are",userRoles);

//add or update 
userRoles.set("viewer", "Read-Only Access");

//get value by key
console.log(userRoles.get("editor"));

//check if key exists
console.log(userRoles.has("admin"));

//delete a key-value pair
userRoles.delete("viewer");

//size of the map
console.log("Size of the map is",userRoles.size);

//clear the entire map
userRoles.clear();