// Overload signatures
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

// Implementation function
function add(a: number, b: number, c?: number): number {
 return c !== undefined ? a + b + c : a + b;
}

//calling function
console.log(add(2, 3)); // 5
console.log(add(2, 3, 4)); // 9


//Example 2
// Overload signatures
function addTwo(a:number, b:number):number;
function addTwo(a:number,b:number,c:number):number;


function addTwo(a:number,b:number,c?:number):number
{
    if(c!==undefined)
    {
        return a+b+c;
    }
    return a+b;
}

console.log(addTwo(10,20));
console.log(addTwo(10,20,30));
