//import { Adresse } from '../models/adresse';
import {Adresse} from '../models/adresse';

export class AddAddress {
  static readonly type = '[Adresse] Address Add ';

  constructor(public payload: Adresse) {
  }
}

export class DeleteAddress{
    static readonly type = '[Adresse] Address Remove ';
  
    constructor(public payload: Adresse) {}
  }