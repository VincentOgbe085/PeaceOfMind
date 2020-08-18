import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ProductService} from '../services/product.service';
import { Product } from '../models/Product';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit{
 
  products: any = [];
  storageRef = firebase.storage().ref();
  imagesRef = this.storageRef.child('product');
  
  editState: boolean = false;
  ProductToEdit: Product;
  //products: Observable<any>;
  
  

  constructor(private productService: ProductService,private af: AngularFireDatabase,private afStorage: AngularFireStorage) {

  }

  ngOnInit(){

    //this.products= this.productService.getImageDetailList();
    //this.products= this.productService.getproductList();
    //console.log(this.products);
    

    this.productService.getImageDetailList().valueChanges().subscribe(products => {
      this.products = products;
    })
  }


}
