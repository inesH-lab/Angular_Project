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
  SubjectProducts$: any;

  constructor(private httpClient: HttpClient) {}

  public product: Productmodel []= [];
  
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

    getSingleProduct(key: string) {
      this.httpClient.get<Productmodel[]>("../../assets/products.json").subscribe(
        (data: Productmodel[]) => {
          if(data) {
            data.find(
              (p) => {
                if(p.hero === key){
                  this.product = data;
                }
              }
            )
            this.emitProduct();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
