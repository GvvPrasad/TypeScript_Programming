//if rate is not given while calling function it take defined default  
let discount =(price:number, rate:number=0.50):number=>
{
        let discount:number=price*rate;
        return discount;
}

console.log(discount(1000,0.30));
console.log(discount(1000));