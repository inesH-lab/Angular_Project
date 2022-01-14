import { Injectable } from '@angular/core';
import { Action,Selector, State, StateContext } from '@ngxs/store';


import { AddProduct, DeleteProduct ,EmptyBasket} from '../actions/product-actions';
import { ProductStateModel } from './product-state-model';
@State<ProductStateModel>({
  name: 'products',
  defaults: {
    produits: [],
  },
})
@Injectable()
export class ProductState {
  @Selector()
  static getNbProducts(state: ProductStateModel) {
    return state.produits.length;}
  @Selector()
  static getListeProducts(state: ProductStateModel) {
    return state.produits;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    {payload}: AddProduct 
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits, payload],
    });
  }
  @Action(EmptyBasket)
  empty(
    { getState, patchState }: StateContext<ProductStateModel>,
    {payload}: EmptyBasket 
  ) {
    const state = getState();
    patchState({
      produits: state.produits.filter(p=>p!=payload),
    });
  }
  @Action(DeleteProduct)
  delete(
    { getState, patchState }: StateContext<ProductStateModel>,
    {payload}: DeleteProduct
  ) {
    const state = getState();
    patchState({
      produits: state.produits.filter(p=>p!=payload),
    });
  }
}