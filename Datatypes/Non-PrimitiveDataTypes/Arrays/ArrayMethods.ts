let names: string[] = ["John", "Smith", "Peter", "Scott"]; 
let numbers: number[] = [1, 2, 3, 4, 5];
let newnumbers: number[] = [5, 6, 7, 8];
const arr = ['a', 'b', 'c', 'd', 'e'];

//accessing array elements using index
console.log(names);
console.log(names[1]);

//concatenating arrays
let newArray = newnumbers.concat(numbers);
console.log(newArray);

/*copywithin an array
copies a part of an array to another location within the same array without changing its length
target (Required): The zero-based index at which to begin pasting the copied elements.
start (Optional): The zero-based index to start copying from. Defaults to 0.
end (Optional): The zero-based index to stop copying (not inclusive)
*/
//Copy elements from index 0 to 2 and paste them starting at index 3:
console.log(numbers.copyWithin(3, 0));

//every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let isBelow10 = (currentValue: number) => currentValue < 10;
console.log(numbers.every(isBelow10)); // true

//fill() method fills all the elements of an array from a start index to an end index with a static value.
console.log(arr.fill('x', 1, 4)); // fills 'x' from index 1 to 3 (4 is not included)

//includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(names.includes("Smith"));

//join() method joins all elements of an array into a string and returns this string.
console.log(names.join(", ")); // Output: "John, Smith, Peter, Scott"

//lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
console.log(numbers.lastIndexOf(3));    

//push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(numbers.push(6));

//pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(numbers.pop()); // removes 6 and returns it

//shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(numbers.shift()); // removes 1 and returns it   

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(numbers.unshift(0)); // adds 0 at the beginning and returns new length

//reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
console.log(numbers.reverse()); // reverses the array

//sort() method sorts the elements of an array in place and returns the sorted array.
console.log(numbers.sort((a, b) => a - b)); // sorts numbers in ascending order 

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//Syntax: array.splice(start, deleteCount, item1, item2, ...)
console.log(names.splice(2, 1, "Michael")); // replaces "Peter" with "Michael" at index 2
console.log(names); // Output: ["John", "Smith", "Michael", "Scott"]

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
console.log(names.slice(1, 3)); // returns ["Smith", "Michael"]

//toString() method returns a string representing the specified array and its elements.
console.log(names.toString()); // Output: "John,Smith,Michael,Scott"
