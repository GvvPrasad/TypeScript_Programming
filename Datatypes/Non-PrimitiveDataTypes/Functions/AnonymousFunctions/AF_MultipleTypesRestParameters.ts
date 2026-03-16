/*
Anonymous Function (Unnamed Function/Nameless Function)
An anonymous function is a function that does not have a name
Instead, it is assigned to a variable, which acts as its name
*/

//Anonymous function with  Rest parameters - multiple types
let noofelements = function(...elements:(number | string)[]):number
{
    return elements.length;
}

console.log(noofelements(3,"john",2,1,"scott"));