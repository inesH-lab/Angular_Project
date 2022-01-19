import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductserviceService } from '../productservice.service';
import { Productmodel } from '../productmodel.model';

import { Store } from '@ngxs/store';
import { Product } from '../shared/models/product';
import { AddProduct } from '../shared/actions/product-actions';
import { ProductPipePipe } from '../pipes/product-pipe.pipe';
import { ProductPipeCategoryPipe } from '../pipes/product-pipe-category.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  search: string="";
  searchFilter:string="";
  searchbis: any;
  category : string = "";
  type:string= "";
  ProductList: Productmodel[]= [];
  searchText: any;
  Products: Subscription | undefined;

  //Items = [
    //{ id: 1, name: 'yeezyun', price: 'India' },
    //{ id: 2, name: 'yeezydeux' , price: 'USA'},
  //];

  //  

 SubjectProduct$: Observable<Array<ProductserviceService>> | undefined ;

  

  constructor(private Productservice: ProductserviceService, private store: Store) {}

  ngOnInit(): void{

    this.Products = this.Productservice.SubjectProducts.subscribe(
      (product : Productmodel[]) =>{
        this.ProductList = product;
      }
    );
    this.Productservice.getCatalogue();
    this.Productservice.emitProduct();
    
  }

  addProduct(product: Product) {
    this.store.dispatch(new AddProduct(product));
  }
}




