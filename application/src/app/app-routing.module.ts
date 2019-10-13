import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService as AuthGuard } from './service/auth.guard.service';

const routes: Routes = [
  { path:'', component: HomeComponent, canActivate:[AuthGuard]},
  { path:'add-product', component:HomeComponent, canActivate:[AuthGuard]},
  { path:'update-product/:id', component:HomeComponent, canActivate:[AuthGuard]},
  { path:'delete-product/:id', component:HomeComponent, canActivate:[AuthGuard]},
  { path:'product-information/:id', component:HomeComponent, canActivate:[AuthGuard]},
  { path:'history', component:HistoryComponent, canActivate:[AuthGuard]},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
