import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  cart: Order[] = [];

  getCart = (): Order[] => {
    return this.cart;
  };

  addToCart = (orders: Order[]): Order[] => {
    return (this.cart = orders);
  };

  removeFromCart = (orders: Order[]): Order[] => {
    return (this.cart = orders);
  };
}
