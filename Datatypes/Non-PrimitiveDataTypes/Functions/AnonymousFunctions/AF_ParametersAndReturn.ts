/*
Anonymous Function (Unnamed Function/Nameless Function)
An anonymous function is a function that does not have a name
Instead, it is assigned to a variable, which acts as its name
*/

//Anonymous function with parameters & return type
let addition=function(x:number, y:number):number
{
    return x+y;
}
console.log('Sum of the numbers is: ',addition(20,30));