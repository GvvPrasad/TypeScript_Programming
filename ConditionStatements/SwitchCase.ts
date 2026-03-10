/*
if → Executes code if condition is true. 
if-else → Executes one block for true, another for false. 
if-else-if → Checks multiple conditions sequentially. 
switch-case → Compares a value against multiple cases for efficiency. 
*/

let day: number = 1; 
switch (day) { 
    case 1: 
        console.log("Monday"); 
        break; 
    case 2: 
        console.log("Tuesday");
         break; 
    case 3: 
        console.log("Wednesday"); 
        break; 
    case 4: 
        console.log("Thursday"); 
        break; 
    default: 
        console.log("Invalid day"); 
}