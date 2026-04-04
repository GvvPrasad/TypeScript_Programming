//This file to be used for testing purposes only, to test the functionality of the calling class and its methods.

import { Item } from "./Baseclass";


class Store extends Item {

    MPR: number;

    constructor(name: string, price: number, MPR: number) {
        super(name, price);
        this.MPR = MPR;
    }

    displayDetails(): void {
        console.log(`Item: ${this.name}, Price: ${this.price}, MPR: ${this.MPR}`);
    }
}

let storeItem = new Store("Laptop", 1000, 1200);
storeItem.displayDetails();
