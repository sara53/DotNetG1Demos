import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  porducts: Iproduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.porducts = this.productService.getAllProduct();
  }
}
