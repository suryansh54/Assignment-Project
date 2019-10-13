import { Injectable } from '@angular/core';
import { from, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataServiceService {

  productsData: Array<any> = [
    { id:"1", productName:"Fruits", productAvailableQuantity:25, productImage:"./assets/images/strawberries.jpeg", productPrice: 500, productCategory:"fruits" },
    { id:"2", productName:"Clothing", productAvailableQuantity:25, productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
    { id:"3", productName:"Services", productAvailableQuantity:25, productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
    { id:"4", productName:"Computers", productAvailableQuantity:25, productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
    { id:"5", productName:"Burger", productAvailableQuantity:25, productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
    { id:"6", productName:"Pizza", productAvailableQuantity:25, productImage:"./assets/images/mouse.jpg", productPrice: 250, productCategory:"pizza" },
    { id:"7", productName:"Fruits", productAvailableQuantity:25, productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
    { id:"8", productName:"Clothing", productAvailableQuantity:25, productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
    { id:"9", productName:"Services", productAvailableQuantity:25, productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
    { id:"10", productName:"Computers", productAvailableQuantity:25, productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
    { id:"11", productName:"Burger", productAvailableQuantity:25, productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
    { id:"12", productName:"Pizza", productAvailableQuantity:25, productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },
    { id:"13", productName:"Fruits", productAvailableQuantity:25, productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
    { id:"14", productName:"Clothing", productAvailableQuantity:25, productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
    { id:"15", productName:"Services", productAvailableQuantity:25, productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
    { id:"16", productName:"Computers", productAvailableQuantity:25, productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
    { id:"17", productName:"Burger", productAvailableQuantity:25, productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
    { id:"18", productName:"Pizza", productAvailableQuantity:25, productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },
    { id:"19", productName:"Fruits", productAvailableQuantity:25, productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
    { id:"20", productName:"Clothing", productAvailableQuantity:25, productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
    { id:"21", productName:"Services", productAvailableQuantity:25, productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
    { id:"22", productName:"Computers", productAvailableQuantity:25, productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
    { id:"23", productName:"Burger", productAvailableQuantity:25, productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
    { id:"24", productName:"Pizza", productAvailableQuantity:25, productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },
    { id:"25", productName:"Fruits", productAvailableQuantity:25, productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
    { id:"26", productName:"Clothing", productAvailableQuantity:25, productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
    { id:"27", productName:"Services", productAvailableQuantity:25, productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
    { id:"28", productName:"Computers", productAvailableQuantity:25, productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
    { id:"29", productName:"Burger", productAvailableQuantity:25, productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
    { id:"30", productName:"Pizza", productAvailableQuantity:25, productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" },{ id:"256ase6", productName:"Fruits", productAvailableQuantity:25, productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" },
    { id:"31", productName:"Clothing", productAvailableQuantity:25, productImage:"./assets/images/clothing.jpg", productPrice: 200, productCategory:"clothing" },
    { id:"32", productName:"Services", productAvailableQuantity:25, productImage:"./assets/images/computer_repair.jpeg", productPrice: 200, productCategory:"services" },
    { id:"33", productName:"Computers", productAvailableQuantity:25, productImage:"./assets/images/comuter.jpg", productPrice: 200, productCategory:"computers" },
    { id:"34", productName:"Burger", productAvailableQuantity:25, productImage:"./assets/images/jacket_men.jpg", productPrice: 200, productCategory:"burger" },
    { id:"35", productName:"Pizza", productAvailableQuantity:25, productImage:"./assets/images/mouse.jpg", productPrice: 200, productCategory:"pizza" }
  ]

  private sourceOfData = new BehaviorSubject(this.productsData);

  constructor() { }
  
  

  products(){
    return this.sourceOfData.asObservable();
  }

  product(productID: string){
    let filteredProduct = this.productsData.filter((v)=> v.id === productID);
    return from(filteredProduct);
  }

  addProduct(data: any) {
    const currentValue = this.sourceOfData.value;
    const updatedValue = [...currentValue, data];
    this.sourceOfData.next(updatedValue);
  }

  updateProduct(id: string, data: any) {
    let filteredProduct = this.productsData.filter((v) => v.id !== id);
    const updatedValue = [...filteredProduct, data];
    this.sourceOfData.next(updatedValue);
  }

  deleteProduct(id: any) {
    let filteredProduct = this.productsData.filter((v) => v.id !== id);
    const updatedValue = [...filteredProduct];
    this.sourceOfData.next(updatedValue);
  }
}
