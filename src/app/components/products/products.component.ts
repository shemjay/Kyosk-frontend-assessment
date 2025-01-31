import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { Product } from '../../services/Model/product.type';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  productItems = signal<Array<Product>>([]);

  ngOnInit(): void {
    this.productService
      .getProductsFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((product) => {
        this.productItems.set(product);
      });
  }
}
