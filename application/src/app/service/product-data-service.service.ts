import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataServiceService {

  constructor() { }

  products(){
    return of([
      { productName:"Fruits", productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
      { productName:"Clothing", productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
      { productName:"Services", productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
      { productName:"Computers", productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
      { productName:"Burger", productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
      { productName:"Pizza", productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },
      { productName:"Fruits", productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
      { productName:"Clothing", productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
      { productName:"Services", productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
      { productName:"Computers", productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
      { productName:"Burger", productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
      { productName:"Pizza", productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },
      { productName:"Fruits", productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
      { productName:"Clothing", productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
      { productName:"Services", productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
      { productName:"Computers", productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
      { productName:"Burger", productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
      { productName:"Pizza", productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },
      { productName:"Fruits", productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
      { productName:"Clothing", productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
      { productName:"Services", productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
      { productName:"Computers", productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
      { productName:"Burger", productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
      { productName:"Pizza", productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },
      { productName:"Fruits", productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
      { productName:"Clothing", productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
      { productName:"Services", productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
      { productName:"Computers", productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
      { productName:"Burger", productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
      { productName:"Pizza", productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },{ productName:"Fruits", productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
      { productName:"Clothing", productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
      { productName:"Services", productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
      { productName:"Computers", productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
      { productName:"Burger", productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
      { productName:"Pizza", productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" }
    ])
  }
}
