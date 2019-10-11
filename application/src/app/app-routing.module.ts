import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { 
  AuthGuardService as AuthGuard 
} from './service/auth.guard.service';

const routes: Routes = [
  { path:'', component: HomeComponent, canActivate:[AuthGuard]},
  { path:'add-product', component:AddProductComponent},
  { path:'list-product', component:ListProductComponent},
  { path:'history', component:HistoryComponent},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
