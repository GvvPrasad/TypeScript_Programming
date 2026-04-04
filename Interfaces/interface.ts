//describes the properties and methods an object must have. We cannot instantiate the interface.

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
}