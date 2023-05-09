import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent {
  i: number;
  imgSrc;
  constructor() {
    this.i = 0;
    this.imgSrc = 'assets/imgs/2.jpg';
  }
  flag: boolean = true;
  title: string = 'gallary Component';
  imgsList: string[] = [
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg',
  ];
  showGallar(): void {
    this.flag = !this.flag;
    this.i++;
    if (this.imgsList.length == this.i) {
      this.i = 0;
    }
    this.imgSrc = this.imgsList[this.i];
  }
}
