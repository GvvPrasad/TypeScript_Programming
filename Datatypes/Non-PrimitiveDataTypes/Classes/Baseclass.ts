//A class is a blueprint for creating objects with properties and methods

export class Item {
  name: string;
  price: number;    

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}