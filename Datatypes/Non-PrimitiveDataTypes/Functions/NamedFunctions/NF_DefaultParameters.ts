//Named function with Default Parameters
//if rate is not given while calling function it take defined default  
function calculateDiscount(price:number, rate:number=0.50):number
{
        let discount:number=price*rate;
        return discount;
}

console.log(calculateDiscount(1000,0.30));
console.log(calculateDiscount(1000));