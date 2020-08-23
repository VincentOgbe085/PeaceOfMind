import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { from } from 'rxjs';
import { ProductService } from './services/product.service'
import { AngularFireDatabaseModule, AngularFireDatabase,AngularFireList} from 'angularfire2/database';


import * as firebase from 'firebase'; 
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AdminComponent } from './admin/admin.component';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HairStyleComponent } from './hair-style/hair-style.component';


firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    ShopComponent,
    BookingsComponent,
    HairStyleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    
    
    

 
  ],
  providers: [ProductService, AngularFirestore, AngularFireDatabase,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
