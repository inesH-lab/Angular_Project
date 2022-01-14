import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { Productmodel } from 'src/app/productmodel.model';
import { Product } from '../shared/models/product';


import { Observable } from 'rxjs';
import { ProductStateModel } from '../shared/states/product-state-model';

import { AddProduct } from '../shared/actions/product-actions';
import { ProductState } from '../shared/states/product-state';
import { DeleteProduct } from '../shared/actions/product-actions';
import { EmptyBasket } from '../shared/actions/product-actions';
import { Store } from '@ngxs/store';
//import { Store } from '@ngxs/store';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  constructor(private store : Store) {
    this.productbasket = this.store.select(state => state.produits);
  }

  productbasket : Observable<Product[]>;

  @Select(ProductState.getNbProducts) nb$!: Observable<number>;
  
  @Select(ProductState.getListeProducts) liste$!: Observable<Product[]> ;
  
  DeleteProduct(id : Product) {
    this.store.dispatch(new DeleteProduct(id));
    console.log(id);
  }
  EmptyBasket(Product: Product) {
    this.store.dispatch(new EmptyBasket(Product));
    console.log(Product);
  }
  ngOnInit(): void {
  }

}
