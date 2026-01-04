let arr: number[] = [10, 20, 30, 40, 50];

//Search an element in an array using function
function search(ele: number, arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true; // Element found
        }
    }
    return false; // Element not found
}


console.log(search(20, arr)); // Output: true
console.log(search(100, arr)); // Output: false