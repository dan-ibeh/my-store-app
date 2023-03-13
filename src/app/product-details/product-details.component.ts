import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../models/product';
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
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.quantity = this.route.snapshot.params['quantity'];
    console.log(this.id);
    this.productService.getProducts().subscribe((res) => {
      this.productList = res;
      this.product = this.productList.filter((p) => p.id == this.id)[0];
      this.product.quantity = this.quantity
    });
  }
}
