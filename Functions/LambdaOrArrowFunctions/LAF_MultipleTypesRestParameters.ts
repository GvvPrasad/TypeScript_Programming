//Lambda function with  Rest parameters - multiple types
let noofelements = (...elements:(number | string)[]):number=>
{
    return elements.length;
}

console.log(noofelements(3,"john",2,1,"scott"));