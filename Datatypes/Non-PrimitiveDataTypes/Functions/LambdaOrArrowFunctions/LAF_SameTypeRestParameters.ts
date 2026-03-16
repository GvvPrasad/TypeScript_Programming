//Lambda function with  Rest parameters - same type
let restparameters =(...nums:number[]):number=>
{
   let i, sum:number = 0; 
   
   for(i = 0;i<nums.length;
    i++) { 
      sum = sum + nums[i]; 
   } 
   return sum;
}
console.log("sum of the numbers: ",restparameters(10,20,30,40,50));