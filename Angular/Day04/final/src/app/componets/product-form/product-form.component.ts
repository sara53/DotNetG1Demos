import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  formOperation(e: any) {
    e.preventDefault();
    // connect api ... add product
    console.log('add Product');
    this.router.navigate(['/products']);
  }
}
