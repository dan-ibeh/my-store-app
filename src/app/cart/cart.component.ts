import { Component } from '@angular/core';
import { Order } from '../models/order';
import { CartService } from './../services/cart.service';
import { ProductService } from './../services/product.service';
import Product from './../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Order[] = [];
  productList: Product[] = [];
  totalCost: number;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {
    this.totalCost = 0;
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.productService.getProducts().subscribe((res) => {
      this.productList = res;
      this.cart.forEach((order) => {
        const price = this.productList.filter(
          (product) => product.id === order.product_id
        )[0].price;
        this.totalCost = parseFloat(
          (this.totalCost + price * order.quantity).toFixed(2)
        );
      });
    });
  }

  removeProduct = (product_id: number): void => {
    const order = this.cart.filter(
      (order) => order.product_id === product_id
    )[0];
    const index = this.cart.indexOf(order);
    this.cart.splice(index, 1);
    this.cartService.removeFromCart(this.cart);
  };

  navigateToSuccess = (name: string) => {
    this.router.navigateByUrl(`success/${name}/${this.totalCost}`);
  };
}
