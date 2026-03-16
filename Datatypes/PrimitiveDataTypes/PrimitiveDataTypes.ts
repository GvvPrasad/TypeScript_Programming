//Number: Number Type Represents both integers and floating-point numbers
const age:number=25;
const price:number=25.5;
const big:number=4234234234;

//String: a single character or a sequence of characters
const message:string="Welcome to our website!";
const ch:string='A';

//Boolean:
const isLoggedIn:boolean=true;
const hasPermission:boolean=false;

//Null:
const value: null = null;

//Undefined:
const secondvalue: undefined = undefined;
    
//Any: A flexible type that allows any value (disables TypeScript checks)
let flexibleValue: any = "This can be a string";
flexibleValue = 42; // No error, even though it's a number

function displaydatatypes():void{
    console.log("Number:",age,price,big);
    console.log("String:",message,ch);
    console.log("Boolean:",isLoggedIn,hasPermission);
    console.log("Null:",value);
    console.log("Undefined:",secondvalue);
    console.log("Any:",flexibleValue);
}


//Union Type Combine multiple types - it can be number or string or NULL
let id:number | string| null;

id=9988334466
console.log(id)
id='33667788'
console.log(id)
id= null
console.log(id)

console.log(typeof(price));


//Void: Represents the absence of a value, typically used for functions that do not return anything
 (function log(): void {
    console.log("Hi"); 
})();


displaydatatypes();