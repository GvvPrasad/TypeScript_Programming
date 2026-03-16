let fruits = ['apple', 'banana', 'mango'];

// push() method adds a new element to the end of an array and returns the new length of the array.
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']

// pop() method removes the last element from an array and returns that element.
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana', 'mango']

// shift() method removes the first element from an array and returns that element.
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'mango']

// unshift() method adds a new element to the beginning of an array and returns the new length of the array.
fruits.unshift('grape');
console.log(fruits); // Output: ['grape', 'banana', 'mango']    

// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let moreFruits = ['kiwi', 'pineapple'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['grape', 'banana', 'mango', 'kiwi', 'pineapple']
console.log(fruits); // Output: ['grape', 'banana', 'mango'] (original array remains unchanged)

// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let citrusFruits = allFruits.slice(2, 4);
console.log(citrusFruits); // Output: ['mango', 'kiwi'] (elements from index 2 to 3)
console.log(allFruits); // Output: ['grape', 'banana', 'mango', 'kiwi', 'pineapple'] (original array remains unchanged)

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
allFruits.splice(1, 2, 'strawberry', 'blueberry');
console.log(allFruits); // Output: ['grape', 'strawberry', 'blueberry', 'kiwi', 'pineapple'] (elements at index 1 and 2 are replaced with 'strawberry' and 'blueberry')

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOfMango = allFruits.indexOf('mango');
console.log(indexOfMango); // Output: 2 (index of 'mango' in the allFruits array)  

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasPineapple = allFruits.includes('pineapple');
console.log(hasPineapple); // Output: true (since 'pineapple' is present in the allFruits array)

// join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
let fruitsString = allFruits.join(', ');
console.log(fruitsString); // Output: 'grape, strawberry, blueberry, kiwi, pineapple' (all elements of the allFruits array joined into a string with ', ' as a separator)   

// reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
allFruits.reverse();
console.log(allFruits); // Output: ['pineapple', 'kiwi', 'blueberry', 'strawberry', 'grape'] (the allFruits array is reversed in place)

// sort() method sorts the elements of an array in place and returns the sorted array.
allFruits.sort();
console.log(allFruits); // Output: ['blueberry', 'grape', 'kiwi', 'pineapple', 'strawberry'] (the allFruits array is sorted in place)   

// length property returns the number of elements in an array.
let numberOfFruits = allFruits.length;
console.log(numberOfFruits); // Output: 5 (the number of elements in the allFruits array)

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let upperCaseFruits = allFruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ['BLUEBERRY', 'GRAPE', 'KIWI', 'PINEAPPLE', 'STRAWBERRY'] (a new array with all fruit names in uppercase)

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
let fruitsWithE = allFruits.filter(fruit => fruit.includes('e'));
console.log(fruitsWithE); // Output: ['blueberry', 'grape', 'pineapple', 'strawberry'] (a new array with fruit names that contain the letter 'e')

// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let totalLength = allFruits.reduce((accumulator, fruit) => accumulator + fruit.length, 0);
console.log(totalLength); // Output: 34 (the total length of all fruit names in the allFruits array)

// forEach() method executes a provided function once for each array element.
console.log('Fruits in the allFruits array:');
allFruits.forEach(fruit => console.log(fruit)); // Output: each fruit name in the allFruits array printed on a new line

// find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.     
let foundFruit = allFruits.find(fruit => fruit.startsWith('b'));
console.log(foundFruit); // Output: 'blueberry' (the first fruit name in the allFruits array that starts with 'b')  

// findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
let foundIndex = allFruits.findIndex(fruit => fruit.startsWith('b'));
console.log(foundIndex); // Output: 0 (the index of the first fruit name in the allFruits array that starts with 'b')   

// some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let hasFruitStartingWithP = allFruits.some(fruit => fruit.startsWith('p'));
console.log(hasFruitStartingWithP); // Output: true (since 'pineapple' is present in the allFruits array and starts with 'p')   

// every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let allFruitsHaveE = allFruits.every(fruit => fruit.includes('e'));
console.log(allFruitsHaveE); // Output: false (not all fruit names in the allFruits array contain the letter 'e')   

// toString() method returns a string representing the specified array and its elements.
let fruitsAsString = allFruits.toString();
console.log(fruitsAsString); // Output: 'blueberry,grape,kiwi,pineapple,strawberry' (a string representation of the allFruits array)    