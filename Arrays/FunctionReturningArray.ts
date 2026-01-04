// A functions takes an Array and returns an array

let words:string[] = ["hello", "world", "typescript"];

function capitalizeWords(arr: string[]): string[] {
    let result: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        result[i]=arr[i].toUpperCase();
    }
    return result;
}

console.log(capitalizeWords(words));