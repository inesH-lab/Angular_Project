import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productmodel } from './productmodel.model';
import { Subject } from 'rxjs';

//import { environment } from './environments/environement';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  public SubjectProducts = new Subject<Productmodel[]>();

  constructor(private httpClient: HttpClient) {}

  public product: Productmodel []= [];
  //public getProduct(): Productmodel [] {
  //  return this.product;
 // }
  public emitProduct() {
    this.SubjectProducts.next(this.product.slice());
  }

   getCatalogue() {
    this.httpClient.get<Productmodel[]>("../assets/mock/product.json").subscribe(
    ( data: Productmodel[]) => {
        if (data) {
          this.product = data;
          this.emitProduct();
        }
      },
      (error)=>{
      console.log(error);}
    
    )}
}
