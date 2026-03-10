/*
Let can be declare anywhere within the file/class and can be used anywhere within the file/class

If a variable with let keyword is declared within a function, it is only accessible within that function

It is not mandatory to initialize a variable with let keyword at the time of declaration 

Let variables cannot be re-declared within the same scope, and doing so will throw an error 

Let variables can be re-assigned within the same scope without throwing an error

It is recommended to use let keyword for variables that need to be re-assigned and const keyword for variables that should not be re-assigned in modern JavaScript development
*/

// Example of var keyword usage
let username: string = "gvv";
let userphone: number = 9988775544;
let userstate: boolean = true;
let userlist: number[] = [5,4,3,2,1,0]; // this is an array of numbers
let useremail: { name: string; value: number } = { name: "gvv", value: 1819 }; // this is an object type variable with properties name and value
//let username: string ="gvv"; // re-declaring the variable user with let keyword, which will throw an error
let usercount: number; // declaring a variable count with let keyword without initializing it, which is allowed and does not throw an error

function letdisplayUserInfo():void {
    console.log("User Name: " + username);
    console.log("Phone Number: " + userphone);
    console.log("Is Active: " + userstate);
    console.log("Email: " + useremail.name + useremail.value + "@gmail.com");
    var localVar: string = "I am a let local variable";
    console.log(localVar);
};

function letcallingarray():void{
    console.log(userlist[0]);
    for (let num of userlist) {
    console.log(num);
    //console.log(localVar);
}};

function letreassigningVar():void{
     userphone: number = 445566; // re-assigning the variable phone with let keyword, which is allowed and does not throw an error
     console.log("Re-assigned Phone Number: " + userphone);
}

letdisplayUserInfo();
letcallingarray();
//letreassigningVar();