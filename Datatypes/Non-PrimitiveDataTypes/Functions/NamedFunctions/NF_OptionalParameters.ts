//Named function with Optional Parameters
//for optional parametrs keep ?  

function displayDetails(id: number, name: string, mailId?: string): { id: number, name: string, mailId?: string } {
    if (mailId !== undefined) {
        return { id, name, mailId }
    }
    return { id, name }

}

console.log(displayDetails(123, "Scott92", 'gvv@gmail.com'))