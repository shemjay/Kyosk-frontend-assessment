import { inject, Injectable } from '@angular/core';
import { Product } from '../Model/product.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  getProductsFromApi() {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<Array<Product>>(url);
  }
}
