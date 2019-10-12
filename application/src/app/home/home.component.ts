import { Component, OnInit } from '@angular/core';
import { ProductDataServiceService } from '../service/product-data-service.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  filter: string = 'All';
  activeRoutes: any;
  productInCart: Array<any> = [];
  selectedContextProductID: string;
  constructor(private productDataService: ProductDataServiceService, private router: Router, private routes: ActivatedRoute) { }
  

  ngOnInit() {
    this.fetchProductList();
    this.routes.url.subscribe((data: any)=>{
      if(data[0]) {
        this.activeRoutes = data[0].path;
      }
    });
    this.activeModel();
  }

  activeModel() :void {
    if (this.activeRoutes === 'add-product') {
      this.addProductModel('');
    } else if (this.activeRoutes === 'update-product') {
      this.updateProduct('');
    } else if (this.activeRoutes === 'delete-product') {
      this.deleteProduct('');
    } else if (this.activeRoutes === 'product-information') {
      this.productInformation('');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  addToCart(productId: string) :void {
    this.productInCart.push(
      { id:"256ase6", productName:"Fruits", productAvailableQuantity:25, productImage:"./assets/images/strawberries.jpeg", productPrice: 200, productCategory:"fruits" }
    );
    this.showProductOption = false;
    console.log(this.productInCart);
    console.log(productId);
  }

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
      this.filter = "All";
      this.productDataService.products().subscribe((data)=>{
        this.productList = data;
      })
    } else {
      this.filter = categoryName;
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

  productOption(event: any) {
    event.preventDefault();
    this.showProductOption = true;
    this.left = event.clientX;
    this.top = event.clientY;
    this.selectedContextProductID = event.target.attributes['id'].nodeValue;
  }

  closeContext() {
    this.showProductOption = false;
  }

  // Model Opertations

  addProductModel(productId: string) {
    let modelScope = {
      title: 'Add product',
      add: 'add'
    }
    this.router.navigateByUrl('/add-product');
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.add;
    this.openModel = true;
    this.showProductOption = false;
    console.log(productId);
  }
  
  updateProduct(productId: string) {
    let modelScope = {
      title: 'Update product',
      update: 'update'
    }
    this.router.navigateByUrl('/update-product');
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.update;
    this.openModel = true;
    this.showProductOption = false;
    console.log(productId);
  }

  productInformation(productId: string) {
    let modelScope = {
      title: 'Product information',
      info: 'info'
    }
    this.router.navigateByUrl('/product-information');
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.info;
    this.openModel = true;
    this.showProductOption = false;
    console.log(productId);
  }

  deleteProduct(productId: string) {
    let modelScope = {
      title: 'Delete Product',
      delete: 'delete'
    }
    this.router.navigateByUrl('/delete-product');
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.delete;
    this.openModel = true;
    this.showProductOption = false;
    console.log(productId);
  }

  closeModel() {
    this.openModel = false;
    this.router.navigateByUrl('/');
  }
}
