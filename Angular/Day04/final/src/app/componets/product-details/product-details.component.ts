import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: Iproduct | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.product = this.productService.getProductById(this.productId);
    console.log(this.product);
  }
}
