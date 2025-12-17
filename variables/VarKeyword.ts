//Var keyword
//var FirstName='mvv';
var Phone ='9988774488';
var email;

function FullName(){
    var FirstName='gvv';
    var LastName='prasad';
    email='prasad@gma';
    console.log(FirstName+' '+LastName +'phone number is '+Phone+' and email is '+email);
}

function nametwo(){
    console.log(FirstName)
}

FullName();
nametwo();

/*
Var can be declare anywhere within the file/class
variable declare in 1 function, it cannot be called from another function
var cab be Reinitialize & declare
*/