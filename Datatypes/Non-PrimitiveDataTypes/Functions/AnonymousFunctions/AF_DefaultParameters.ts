/*
Anonymous Function (Unnamed Function/Nameless Function)
An anonymous function is a function that does not have a name
Instead, it is assigned to a variable, which acts as its name
*/

//if rate is not given while calling function it take defined default  
let discount =function(price:number, rate:number=0.50):number
{
        let discount:number=price*rate;
        return discount;
}

console.log(discount(1000,0.30));
console.log(discount(1000));