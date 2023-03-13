export default class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  url: string;
  description: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 1;
    this.quantity = 1;
    this.url = '';
    this.description = '';
  }
}
