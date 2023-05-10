import { Component } from '@angular/core';
import { productList } from 'src/app/models/productList';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: IProduct[] = [];
  constructor() {
    this.products = productList;
  }
}
