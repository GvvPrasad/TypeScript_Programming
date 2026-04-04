/*
It worksonly with arrays and it is used to iterate over the elements of an array.
It is used to loop through the elements of an array and it does not return anything. 
It is a higher-order function that takes a callback function as an argument and executes that function for each element in the array.
*/

const fruits: string[] = ["apple", "banana", "cherry"];

fruits.forEach((fruit: string, index: number) => {
  console.log(index, fruit);
});