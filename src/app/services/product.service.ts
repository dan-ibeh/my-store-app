import { Injectable } from '@angular/core';
import Product from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>('../../assets/products.json');
  };

  updateProducts = (products: Product[]): Observable<Product[]> => {
    return this.http.post<Product[]>('../../assets/products.json', products);
  };
}
