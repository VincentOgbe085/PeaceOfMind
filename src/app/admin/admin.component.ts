import { Component,Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { ProductService } from '../services/product.service';
import { Data } from '@angular/router';
import { Product } from '../models/Product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  selectedImage: any = null;
  SearchId: any;

  

  url:string;
  id:string;
  name:string;
  price:string;
  Description:string;
  stock: 0
  file:string;

  products: Data[];

  edit:any;

  a: any;

  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;

  lastkeypress: number = 0;

  constructor(private Api: ApiService, private storage: AngularFireStorage,private productService: ProductService,) { }


  ngOnInit() {
    let s = this.productService.getImageDetailList();

    s.snapshotChanges().subscribe(data => {
      this.products = [];
      data.forEach(item => {
        this.a = item.payload.toJSON(); 
        this.a['$key'] = item.key;
        this.products.push(this.a as Product)
      })

    })
    //this.productService.getsearch(this.startAt,this.endAt).valueChanges().subscribe(products => this.products = products)

  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  save() {
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.productService.insertImageDetails(this.id,this.url,this.name,this.price,this.Description,this.stock);
          alert('Upload Successful');
        })
      })
    ).subscribe();
  }

  view(){
    //this.productService.getImage(this.file);
    //console.log( this.productService.getImage(this.file));

      this.productService.getImageDetailList().valueChanges().subscribe(products => {
        this.products = products;
      })

   
  }
  Search(SearchId){
    
  this.productService.getsearch(SearchId);
    
   //this.edit= this.productService.Search(this.SearchId);
  // this.edit.subscribe(thi)

    // this.productService.Search(this.SearchId).valueChanges().subscribe(products => {
    //   this.products = products;

     // console.log(this.products);
   // })


  }
  deleteProduct(product) {
    if (window.confirm('Are sure you want to delete this student ?')) {
    this.productService.deleteProduct(product.$key);
    }
  
  }

  // onFileSelected(event) {
  //   var n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `product/${n}`;
  //   const fileRef = this.storage.ref(filePath).put(file);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);
  //   task.snapshotChanges().pipe(
  //       finalize(() => {
  //        // this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //           }
  //           console.log(this.fb);
  //         });
  //       })
  //     ).subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });

  // }
}
