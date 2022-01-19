import { Injectable } from '@angular/core';
import { Action,Selector, State, StateContext } from '@ngxs/store';

import { DeleteAddress,AddAddress } from '../actions/adresse-action';

import { AdresseStateModel } from './adresse-state-model';
@State<AdresseStateModel>({
  name: 'adresse',
  defaults: {
    adresse: [],
  },
})
@Injectable()
export class AdresseState {
  @Selector()
  static getNbAdresses(state: AdresseStateModel) {
    return state.adresse.length;}
  @Selector()
  static getListeAdresse(state: AdresseStateModel) {
    return state.adresse;
  }

  @Action(AddAddress)
  add(
    { getState, patchState }: StateContext<AdresseStateModel>,
    {payload}: AddAddress 
  ) {
    const state = getState();
    patchState({
        adresse: [...state.adresse, payload],
    });
  }
 
  @Action(DeleteAddress)
  delete(
    { getState, patchState }: StateContext<AdresseStateModel>,
    {payload}: DeleteAddress
  ) {
    const state = getState();
    patchState({
        adresse: state.adresse.filter(p=>p!=payload),
    });
  }
}