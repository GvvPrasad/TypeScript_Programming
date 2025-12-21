/*
Anonymous Function (Unnamed Function/Nameless Function)
An anonymous function is a function that does not have a name
Instead, it is assigned to a variable, which acts as its name
*/

//Anonymous function with  Rest parameters - same type
let restparameters =function(...nums:number[]):number
{
   let i, sum:number = 0; 
   
   for(i = 0;i<nums.length;
    i++) { 
      sum = sum + nums[i]; 
   } 
   return sum;
}
console.log("sum of the numbers: ",restparameters(10,20,30,40,50));