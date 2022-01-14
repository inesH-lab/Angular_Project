import {Product} from '../models/product';

export class AddProduct {
  static readonly type = '[Produit] Add';

  constructor(public payload: Product) {}
}

export class DeleteProduct {
    static readonly type = '[Produit] Delete';
  
    constructor(public payload: Product) {}
  }
  export class EmptyBasket {
    static readonly type = '[Produit] Empty';
  
    constructor(public payload: Product) {}
  }