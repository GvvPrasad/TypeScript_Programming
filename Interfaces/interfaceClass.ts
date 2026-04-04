class electronics implements Product {
	id: number;
	name: string;
	price: number;
    description?: string | undefined;

    constructor(id: number, name: string, price: number, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    details(): string {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Description: ${this.description || 'N/A'}`;
    }
}

const device = new electronics(1, "Smartphone", 699.99, "Latest model with advanced features");
console.log(device.details());