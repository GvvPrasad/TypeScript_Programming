/*
When user call a function greet with parameters "Pavan", showMessage
1st pavan is passed as parameter & it is displayed
2nd showMessage is linked to callback keyword
and whatever parameter is passed for callbackfunction it will be sent to the function & will executive 
*/


// Function that takes a callback as an argument
function greet(name: string, callback: (message: string) => void) {
 console.log(name);
 callback("Hello"); // Calling the callback function
}
// Callback function
function showMessage(message: string) {
 console.log(message);
}
// Calling the function by passing the callback
greet("Pavan", showMessage);
