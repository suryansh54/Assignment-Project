import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ProductDataServiceService } from './service/product-data-service.service';
import { AuthGuardService } from './service/auth.guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [ProductDataServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    this.userData();
  }
  userData() {
    sessionStorage.setItem('userToken','asdasd');
    sessionStorage.setItem('userRole','admin');
    sessionStorage.setItem('userName','Suryansh');
    sessionStorage.setItem('userExpiryTime','3600');
  }
}
