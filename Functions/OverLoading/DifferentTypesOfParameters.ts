// Overload signatures
function display(value: number): string;
function display(value: string): string;
function display(value: boolean): string;

// Implementation function
function display(value: number | string | boolean): string {
 return `Value is: ${value}`;
}

//calling function
console.log(display(100)); // "Value is: 100"
console.log(display("Hello")); // "Value is: Hello"
console.log(display(true)); // "Value is: true"

//Example 2

// Overload signatures
function getInfo(id:number):string;
function getInfo(name:string):string;

// Implementation function
function getInfo(param: number|string):string
{
        if(typeof param==="number")
        {
            return(`User ID is ${param}`);
        }
        else
        {
            return(`User Name is ${param}`);
        }
}

//calling function
console.log(getInfo(101)); //User ID is 101
console.log(getInfo("John")); //User Name is John
