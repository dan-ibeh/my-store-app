import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Product from '../models/product';
import { Order } from '../models/order';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() order: Order;
  @Output() removeProduct: EventEmitter<number> = new EventEmitter();
  product: Product;
  productList: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.productList = res;
      console.log(this.productList);
      this.product = this.productList.filter(
        (product) => product.id === this.order.product_id
      )[0];
      this.product.quantity = this.order.quantity;
      console.log(this.product);
    });
  }

  constructor(private router: Router, private productService: ProductService) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      quantity: 1,
      url: '',
      description: '',
    };

    this.order = {
      product_id: 1,
      quantity: 1,
    };
  }

  removeFromCart = (id: number): void => {
    this.removeProduct.emit(id);
  };
}
