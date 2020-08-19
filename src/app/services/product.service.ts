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

    this.imageDetailList = this.firebase.list('/product')
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
    this.imageDetailList.push(this.dataSet);
  }

  getImage(value){
    this.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val();  });
        this.fileList.forEach(element => {
          if(element.id===value)
          this.msg = element.url;
        });
        if(this.msg==='error')
          alert('No record found');
        else{
          window.open(this.msg);
          this.msg = 'error';
        }
      }
    );
  }
  deleteProduct(id: string) {
   
    this.productitem  = this.firebase.object('product/' + id);
    this.productitem.remove();
  }

  Search(id: string):any{
    console.log(id);
    this.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val();  });
        this.fileList.forEach(element => {
          if(element.id===id){
          return this.msg = element;
          }
          
        });
        if(this.msg==='error')
          alert('No record found');
        else{
         console.log(this.msg);
          return(this.msg)
         
        }
      }
    );
  }
  
}



