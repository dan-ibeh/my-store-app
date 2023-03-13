import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Product from '../models/product';
import { Order } from '../models/order';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<Order> = new EventEmitter();

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      quantity: 1,
      url: '',
      description: '',
    };
  }

  navigateToProductDetails = (id: number, quantity: number) => {
    this.router.navigateByUrl(`product/${id}/${quantity}`);
  };

  addToCart = (id: number):void => {
    this.addProduct.emit({ product_id: id, quantity: this.product.quantity });
  };
}
