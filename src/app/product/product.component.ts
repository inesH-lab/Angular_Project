import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductserviceService } from '../productservice.service';
import { Productmodel } from '../productmodel.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  search: string="";
  type:string="";
  searchbis: any;

  ProductList: Productmodel[]= [];
  searchText: any;
  Products: Subscription | undefined;

  //Items = [
    //{ id: 1, name: 'yeezyun', price: 'India' },
    //{ id: 2, name: 'yeezydeux' , price: 'USA'},
  //];

  //

 // SubjectProduct$: Observable<Array<ProductserviceService>> | undefined ;

  

  constructor(private Productservice: ProductserviceService) { }

  ngOnInit(): void{

    this.Products = this.Productservice.SubjectProducts.subscribe(
      (product : Productmodel[]) =>{
        this.ProductList = product;
      }
    );
    this.Productservice.getCatalogue();
    this.Productservice.emitProduct();
    
  }
  getWidth() : number{
    return window.innerWidth;
  }

}


