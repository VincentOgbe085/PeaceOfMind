import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ShopComponent } from './shop/shop.component';
import {BookingsComponent} from './bookings/bookings.component';
import {HairStyleComponent} from './hair-style/hair-style.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'booking', component: BookingsComponent },
  { path: 'hair-style', component: HairStyleComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,

  ]
})
export class AppRoutingModule { }
