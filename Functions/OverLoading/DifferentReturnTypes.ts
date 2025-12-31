// Overload signatures
function processInput(input: string): string;
function processInput(input: number): number;

// Implementation function
function processInput(input: string | number): string | number {
 return typeof input === "string" ? input.toUpperCase() : input * 2;
}

console.log(processInput("hello")); // "HELLO"
console.log(processInput(10)); // 20

//Example 2
function processInputtwo(input:string):string;
function processInputtwo(input:number):number;

function processInputtwo(input :string | number): string | number
{
    if(typeof input==="string")
    {
        return input.toUpperCase();
    }
    else
    {
        return input*2;
    }
}

console.log(processInputtwo("welcome"));
console.log(processInputtwo(5));
