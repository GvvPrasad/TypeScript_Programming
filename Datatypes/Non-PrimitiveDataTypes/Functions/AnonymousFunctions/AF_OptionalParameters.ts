/*
Anonymous Function (Unnamed Function/Nameless Function)
An anonymous function is a function that does not have a name
Instead, it is assigned to a variable, which acts as its name
*/

//Anonymous function with Optional Parameters
//for optional parametrs keep ?  

let details =function(id: number, name: string, mailId?: string):{id: number, name: string, mailId?: string} {
    if(mailId !==undefined ){
   return { id, name, mailId }
   }
   return { id, name }
  
}

console.log (details(123,"Scott92",'gvv@gmail.com'))