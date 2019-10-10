import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList: Array<any> = [
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 },
    { productName:"Product A", productImage:"./assets/images/clothing.jpg", productPrice: 200 }

  ]
  constructor() { }

  ngOnInit() {
  }

}
