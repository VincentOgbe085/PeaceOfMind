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
  s: any;

  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;

  lastkeypress: number = 0;

  constructor(private Api: ApiService, private storage: AngularFireStorage,private productService: ProductService,) { }


  ngOnInit() {
    this.s = this.productService.getImageDetailList();
    
  

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
    
      this.s.snapshotChanges().subscribe(data => {
        this.products = [];
        data.forEach(item => {
          this.a = item.payload.toJSON(); 
          this.a['$key'] = item.key;
          this.products.push(this.a as Product)
        })
  
      })

   
  }
  Search(SearchId){
    
   this.productService.Search(SearchId).valueChanges().subscribe(products => {

      this.products = products;  
  })
      

  };

  deleteProduct(product) {
    if (window.confirm('Are sure you want to delete this student ?')) {
    this.productService.deleteProduct(product.$key);
    }
  
  }

}
