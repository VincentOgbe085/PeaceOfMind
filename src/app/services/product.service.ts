import { Injectable, Inject } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Product} from '../models/Product';
import { Observable } from 'rxjs';
import { Data } from '../models/Data';
import { AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPath = 'Product';

  productListRef: AngularFireList<any>;
  searchItem :  Observable<any>;
  productitem: AngularFireObject<any>; 

  imageDetailList: AngularFireList<any>;
  fileList: any[];
  dataSet: Data = {
    id: '',
    url:'',
    name:'',
    price:'',
    Description:'',
    stock: 0 };

  msg:string = 'error';
  products:any[];

  constructor(public afs: AngularFirestore, @Inject(AngularFireDatabase) private firebase: AngularFireDatabase) {
    
    this.imageDetailList = this.firebase.list('/product');
  
  }

  ngOnInit(){
    this.Search;
  }

  getImageDetailList(): AngularFireList<any>  {
    return this.imageDetailList;
  }

  getsearch(id: string): AngularFireObject<any>{
    //console.log(id);
    this.productitem = this.firebase.object('product/' + id);
    console.log(this.productitem);
    return this.productitem;
 }

  insertImageDetails(id,url,name,price,Description,stock) {
    this.dataSet = {
      id: id ,
      url: url,
      name: name,
      price: price,
      Description: Description,
      stock: stock,
    };
    this.productListRef = this.firebase.list('product', ref => ref.orderByChild('id').equalTo(id));
    console.log(this.productListRef)
    // if(this.productListRef == undefined){
      this.imageDetailList.push(this.dataSet);
    // }
    // else{
    //   alert("this id:" + id + "already exists")
    // }
  }
  deleteProduct(id: string) {
   
    this.productitem  = this.firebase.object('product/' + id);
    this.productitem.remove();
  }


  Search(id: string){
    console.log(id);

    return this.firebase.list('product', ref => ref.orderByChild('id').equalTo(id));

}

}