import { Component, OnInit } from '@angular/core';
import { ProductDataServiceService } from '../service/product-data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openModel: boolean = false;
  productList: Array<Object>;
  showProductOption: boolean = false;
  modelHeading: string;
  left: number;
  top: number;
  modelBoxType: string;
  productCategory: Array<any> = [];
  productBackgroundColor: string = "#2196f399";
  constructor(private productDataService: ProductDataServiceService) { }
  
  getRandomColor() {
    let o = Math.round, r = Math.random, s = 255;
    let color =  'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.6 + ')';
    this.productBackgroundColor = color;
    console.log(color);
  }

  fetchProductList() {
    this.productDataService.products().subscribe((data)=>{
      this.productList = data;
      for(let i = 0; i < data.length; i++){
        if(this.productCategory.indexOf(data[i].productCategory) == -1) {
          this.productCategory.push(data[i].productCategory);  // Remove duplicates category
        }
      }
    })
  }

  filterCategory(categoryName: string) {
    if(categoryName == 'home') {
      this.productDataService.products().subscribe((data)=>{
        this.productList = data;
      })
    } else {
      this.productDataService.products().subscribe((data)=>{
        this.productList = data.filter(function(item: any){
          return item.productCategory.toLowerCase().indexOf(categoryName.toLowerCase()) != -1;
        });
      })
    }
    this.getRandomColor();
  }
  productSearch($event: any) {
    this.productDataService.products().subscribe((data)=>{
      this.productList = data.filter(function(item: any){
        return item.productName.toLowerCase().indexOf($event.target.value.toLowerCase()) != -1;
      });
    })
  }
  ngOnInit() {
    this.fetchProductList();
  }

  

  closeAddProductModel() {
    this.openModel = false;
  }

  
  productOption(event: any) {
    event.preventDefault();
    this.showProductOption = true;
    this.left = event.clientX;
    this.top = event.clientY;
    console.log(event);
  }

  closeContext() {
    this.showProductOption = false;
  }

  addProductModel() {
    let modelScope = {
      title: 'Add product',
      add: 'add'
    }
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.add;
    this.openModel = true;
    this.showProductOption = false;
  }
  
  updateProduct() {
    let modelScope = {
      title: 'Update product',
      update: 'update'
    }
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.update;
    this.openModel = true;
    this.showProductOption = false;
  }

  productInformation() {
    let modelScope = {
      title: 'Product information',
      info: 'info'
    }
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.info;
    this.openModel = true;
    this.showProductOption = false;
  }

  deleteProduct() {
    let modelScope = {
      title: 'Delete Product',
      delete: 'delete'
    }
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.delete;
    this.openModel = true;
    this.showProductOption = false;
  }
}
