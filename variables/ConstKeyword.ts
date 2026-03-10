/*
const can be declare anywhere within the file/class and can be used anywhere within the file/class

If a variable with const keyword is declared within a function, it is only accessible within that function

It is mandatory to initialize a variable with const keyword at the time of declaration, and it cannot be left uninitialized

Const variables cannot be re-assigned within the same scope, and doing so will throw an error

Const variables cannot be re-declared within the same scope, and doing so will throw an error

It is recommended to use const keyword for variables that should not be re-assigned 
*/

// Example of const keyword usage
const newname: string = "venkat";
const newphone: number = 22774488;
const newstatus: boolean = true;
const newlist: number[] = [10, 20, 30, 40, 50]; // this is an array of numbers
const newemail: { name: string; value: number } = { name: "venkat", value: 1819 }; // this is an object type variable with properties name and value
//const newname: string ="venkat"; // re-declaring the variable user with const keyword, which will throw an error
//const newcount: number; // declaring a variable count with const keyword without initializing it, which will throw an error

function constdisplayUserInfo(): void {
    console.log("User Name: " + newname);
    console.log("Phone Number: " + newphone);
    console.log("Is Active: " + newstatus);
    console.log("Email: " + newemail.name + newemail.value + "@gmail.com");
    var localVar: string = "I am a let local variable";
    console.log(localVar);
};

function constcallingarray(): void {
    console.log(newlist[0]);
    for (let num of newlist) {
    console.log(num);
    //console.log(localVar);
}};

function constreassigningVar(): void {
     newphone: number = 445566; // re-assigning the variable phone with const keyword, which is not allowed and will throw an error
     console.log("Re-assigned Phone Number: " + newphone);
};

constdisplayUserInfo();
constcallingarray();
//constreassigningVar();