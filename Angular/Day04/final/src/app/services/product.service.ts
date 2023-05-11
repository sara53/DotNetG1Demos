import { Injectable } from '@angular/core';
import { productList } from '../models/productList';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProduct(): Iproduct[] {
    return productList;
  }

  getProductById(productId: number): Iproduct {
    return productList.filter((product) => product.id == productId)[0];
  }
}
