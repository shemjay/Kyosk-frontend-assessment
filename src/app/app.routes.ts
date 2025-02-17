import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'productdetails',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      );
    },
  },
  {
    path: 'categories',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/categories/categories.component').then(
        (m) => m.CategoriesComponent
      );
    },
  },
  {
    path: 'cart',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/cart/cart.component').then((m) => m.CartComponent);
    },
  },
];
