import { Component, OnInit } from '@angular/core';
import { ProductDataServiceService } from '../service/product-data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  cartTotalValue: number = 0;
  selectedContextProductID: string;
  totalItemInCart: number;
  constructor(private productDataService: ProductDataServiceService, private router: Router, private routes: ActivatedRoute, private _snackBar: MatSnackBar) { }
  
  addProductItems = new FormGroup({
    productName: new FormControl(''),
    productCategory: new FormControl(''),
    productUnitPrice: new FormControl(''),
    productAvailableQuantity: new FormControl(''),
    productImage: new FormControl('')
  });
  
  updateProductItems = new FormGroup({
    productName: new FormControl(''),
    productCategory: new FormControl(''),
    productUnitPrice: new FormControl(''),
    productAvailableQuantity: new FormControl(''),
    productImage: new FormControl('')
  });

  ngOnInit() {
    this.fetchProductList();
    this.routes.url.subscribe((data: any)=>{
      if(data[0]) {
        this.activeRoutes = data[0].path;
      }
    });
    this.activeModel();
    this.cartItemsBuilder();
  }

  cartItemsBuilder() {
    var cartData = sessionStorage.getItem('cartData');
    if(cartData){
      this.productInCart = JSON.parse(cartData);
      this.totalCartData();
    }
  }

  activeModel() :void {
    let paramsId = this.routes.snapshot.params.id;
    if (this.activeRoutes === 'add-product') {
      this.addProductModel(paramsId);
    } else if (this.activeRoutes === 'update-product') {
      this.updateProduct(paramsId);
    } else if (this.activeRoutes === 'delete-product') {
      this.deleteProduct(paramsId);
    } else if (this.activeRoutes === 'product-information') {
      this.productInformation(paramsId);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  totalCartData() {
    this.cartTotalValue = 0;
    this.totalItemInCart = 0;
    for(let product of this.productInCart) {
      this.cartTotalValue += product.totalPrice;
      this.totalItemInCart += product.cartQuantity;
    }
    
  }

  storeCartDataToLocal(){
    sessionStorage.setItem('cartData', JSON.stringify(this.productInCart));
  }

  openSnackBox(message: string, action: string){
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
  
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addProductSubmit() {
    let productSchema: any = { }
    productSchema.id = this.uuidv4();
    productSchema.productName = this.addProductItems.value.productName;
    productSchema.productAvailableQuantity = this.addProductItems.value.productAvailableQuantity;
    productSchema.productPrice = this.addProductItems.value.productUnitPrice;
    productSchema.productImage = './assets/images/comuter.jpg';
    productSchema.productCategory = this.addProductItems.value.productCategory;
    // Push after success the POST API's of addProduct method in product data service.
    this.productDataService.addProduct(productSchema);
    this.openModel = false;
    this.openSnackBox('Product added','Success');
  }

  fillDataToUpdateForm(productName: any ,productAvailableQuantity: any ,productPrice: any ,productCategory: any) {
    this.updateProductItems.patchValue({
      productName: productName,
      productAvailableQuantity: productAvailableQuantity,
      productUnitPrice: productPrice,
      productCategory: productCategory,
      productImage: './assets/images/keyboard.jpg'
    });
  }

  updateProductSubmit() {
    let paramsId = this.routes.snapshot.params.id;
    let productSchema: any = { }
    productSchema.id = paramsId;
    productSchema.productName = this.updateProductItems.value.productName;
    productSchema.productAvailableQuantity = this.updateProductItems.value.productAvailableQuantity;
    productSchema.productPrice = this.updateProductItems.value.productUnitPrice;
    productSchema.productImage = './assets/images/comuter.jpg';
    productSchema.productCategory = this.updateProductItems.value.productCategory;
    // Push after success the POST API's of addProduct method in product data service.
    this.productDataService.updateProduct(paramsId, productSchema);
    this.openModel = false;
    this.openSnackBox('Product updated','Success');
  }

  deleteProductItem(id: string) {
    let paramsId = this.routes.snapshot.params.id;
    this.productDataService.deleteProduct(paramsId);
    this.openSnackBox('Product deleted','Success');
    // this.router.navigateByUrl('/');
  }

  addToCart(productId: string) :void {
    this.showProductOption = false;
    this.productDataService.product(productId).subscribe((productById)=>{
      productById.cartQuantity = 1;
      productById.totalPrice = productById.productPrice;
      this.productInCart.push(productById);
    });
    this.totalCartData();
    this.storeCartDataToLocal();
  }

  deleteCart(id: any): void {
    this.productInCart = this.productInCart.filter((v) => v.id !== id );
    console.log(id);
    this.totalCartData();
    this.storeCartDataToLocal();
  }

  dynamicProductCartInput(event: any, id: any) {
    console.log(event, event.target.value, id);
  }

  plusMinusCart(event: any, id: any, action: string, cartInput :number = 1) :void {
    let index = this.productInCart.findIndex(x => x.id === id);
    let productPrice = this.productInCart[index].productPrice;
    if (action == 'plus') {
      this.productInCart[index].cartQuantity +=  1;
      
    } else if (action == 'minus') {
      this.productInCart[index].cartQuantity -=  1;
    }
    productPrice = this.productInCart[index].productPrice * this.productInCart[index].cartQuantity;
    this.productInCart[index].totalPrice = productPrice;
    this.totalCartData();
    this.storeCartDataToLocal();
  }

  getRandomColor() {
    let o = Math.round, r = Math.random, s = 255;
    let color =  'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.6 + ')';
    this.productBackgroundColor = color;
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
  alreadyInCart: boolean = false;
  productOption(event: any) {
    event.preventDefault();
    this.showProductOption = true;
    this.left = event.clientX;
    this.top = event.clientY;
    this.selectedContextProductID = event.target.attributes['id'].nodeValue;
    let alreadyInCart: any = [];
    for(let i= 0; i< this.productInCart.length; i++) {
      alreadyInCart.push(this.productInCart[i].id);
    }
    if(alreadyInCart.indexOf(this.selectedContextProductID) > -1) {
        this.alreadyInCart = true;
    } else {
        this.alreadyInCart = false;
    } 
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
  }
  
  updateProduct(productId: string) {
    let modelScope = {
      title: 'Update product',
      update: 'update'
    }
    this.productDataService.product(productId).subscribe((product)=>{
      this.fillDataToUpdateForm(product.productName,product.productAvailableQuantity,product.productPrice,product.productCategory);
    });
    this.router.navigateByUrl('/update-product/'+productId);
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.update;
    this.openModel = true;
    this.showProductOption = false;
  }

  productInformation(productId: string) {
    let modelScope = {
      title: 'Product information',
      info: 'info'
    }
    this.router.navigateByUrl('/product-information/'+productId);
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.info;
    this.openModel = true;
    this.showProductOption = false;
  }

  deleteProduct(productId: string) {
    let modelScope = {
      title: 'Delete Product',
      delete: 'delete'
    }
    this.router.navigateByUrl('/delete-product/'+productId);
    this.modelHeading = modelScope.title;
    this.modelBoxType = modelScope.delete;
    this.openModel = true;
    this.showProductOption = false;
  }

  closeModel() {
    this.openModel = false;
    this.router.navigateByUrl('/');
  }
}
