//It allows us to store distinct data (each value occur only once) into the List. Sets are a bit similar to maps, but it stores only keys, not the key-value pairs

let studentEntries = new Set(); 

//Add Values  
studentEntries.add("John");
studentEntries.add("Peter");  
studentEntries.add("Gayle");

//Returns Set data  
console.log(studentEntries); 

//Check value is present or not  
console.log(studentEntries.has("John"));

//It returns size of Set  
console.log(studentEntries.size);

//Delete a value from set  
console.log(studentEntries.delete("Gayle")); 

//Clear whole Set  
studentEntries.clear();   
  
//Returns Set data after clear method.  
console.log(studentEntries);  
