/*
Var can be declare anywhere within the file/class and can be used anywhere within the file/class

If a varibale with var keyword is declared within a function, it is only accessible within that function

It is not mandatory to initialize a variable with var keyword at the time of declaration

Var variables can be re-assigned within the same scope without throwing an error

Var variables can be re-declared within the same scope without throwing an error

It is best to avoid using var keyword in modern JavaScript development and instead use let or const for better scoping and to prevent accidental re-declarations or re-assignments
*/

// Example of var keyword usage
var user: string = "Prasad";
var phone: number = 9988775544;
var isActive: boolean = true;
var list: number[] = [1, 2, 3, 4, 5]; // this is an array of numbers
var email: { name: string; value: number } = { name: "vara", value: 1819 }; // this is an object type variable with properties name and value
var user: string ="gvv"; // re-declaring the variable user with var keyword, which is allowed and does not throw an error
var count: number; // declaring a variable count with var keyword without initializing it, which is allowed and does not throw an error


function vardisplayUserInfo():void {
    console.log("User Name: " + user);
    console.log("Phone Number: " + phone);
    console.log("Is Active: " + isActive);
    console.log("Email: " + email.name + email.value + "@gmail.com");
    var localVar: string = "I am a local variable";
    console.log(localVar);
    
};

function varcallingarray():void{
    console.log(list[0]);
    for (let num of list) {
    console.log(num);
    //console.log(localVar);
}};

function varreassigningVar():void{
     phone: phone = 1234567890; // re-assigning the variable phone with var keyword, which is allowed and does not throw an error
     console.log("Re-assigned Phone Number: " + phone);
}

vardisplayUserInfo();
varcallingarray();
varreassigningVar();