//Lambda function with Optional Parameters
//for optional parametrs keep ?  

let details =(id: number, name: string, mailId?: string):{id: number, name: string, mailId?: string} =>{
    if(mailId !==undefined ){
   return { id, name, mailId }
   }
   return { id, name }
  
}

console.log (details(123,"Scott92",'gvv@gmail.com'))