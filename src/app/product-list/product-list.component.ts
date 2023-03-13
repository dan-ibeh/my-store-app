import { Component } from '@angular/core';
import Product from '../models/product';
import { ProductService } from './../services/product.service';
import { CartService } from './../services/cart.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[] = [];
  cart: Order[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    const cartIds: number[] = [];
    this.cart.map((order) => cartIds.push(order.product_id));

    this.productService.getProducts().subscribe((res) => {
      this.productList = res.map((product) => ({ ...product, quantity: 1 }));
      this.productList = this.productList.filter(
        (product) => !cartIds.includes(product.id)
      );
    });
  }

  addProduct = (order: Order): void => {
    this.cart.unshift(order);
    this.cartService.addToCart(this.cart);
    const product = this.productList.filter(
      (product) => product.id === order.product_id
    )[0];
    this.productList = this.productList.filter(
      (product) => product.id !== order.product_id
    );
    alert(`${product.name} has been added to your cart`);
    // this.productService.updateProducts(this.productList).subscribe((res) => {
    //   console.log(res);
    // });
  };
}
