//Named function with  Rest parameters - same type
function restParameters(...nums:number[]):number
{
   let i, sum:number = 0; 
   
   for(i = 0;i<nums.length;
    i++) { 
      sum = sum + nums[i]; 
   } 
   return sum;
}
console.log("sum of the numbers: ",restParameters(10,20,30,40,50));