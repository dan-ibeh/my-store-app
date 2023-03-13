import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../models/order';
import Product from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productList: Product[] = [];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  id: number = 1;
  quantity: number = 1;
  product: Product = {
    id: 1,
    name: '',
    price: 1,
    quantity: 1,
    url: '',
    description: '',
  };
  cart: Order[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.quantity = this.route.snapshot.params['quantity'];
    this.productService.getProducts().subscribe((res) => {
      this.productList = res;
      this.product = this.productList.filter((p) => p.id == this.id)[0];
      this.product.quantity = this.quantity;
    });
    this.cart = this.cartService.getCart();
  }

  quantityChanged = (quantity: number): void => {
    this.quantity = quantity;
    console.log(quantity);
  };

  addProduct = (): void => {
    const order = {
      product_id: this.product.id,
      quantity: this.product.quantity,
    };
    this.cart.unshift(order);
    this.cartService.addToCart(this.cart);
    const product = this.productList.filter(
      (product) => product.id === order.product_id
    )[0];
    this.productList = this.productList.filter(
      (product) => product.id !== order.product_id
    );
    this.router.navigateByUrl(`cart`);
  };
}
