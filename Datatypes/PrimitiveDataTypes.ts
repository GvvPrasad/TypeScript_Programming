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

function displaydatatypes():void{
    console.log("Number:",age,price,big);
    console.log("String:",message,ch);
    console.log("Boolean:",isLoggedIn,hasPermission);
    console.log("Null:",value);
    console.log("Undefined:",secondvalue);
}

displaydatatypes();