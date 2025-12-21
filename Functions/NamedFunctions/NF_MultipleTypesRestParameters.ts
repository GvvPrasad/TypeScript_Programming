//Named function with  Rest parameters - multiple types
function lengthof(...elements:(number | string)[]):number
{
    return elements.length;
}

console.log(lengthof(3,"john",2,1,"scott"));