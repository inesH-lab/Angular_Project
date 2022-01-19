import { Component, OnInit, Input} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DeleteAddress,AddAddress } from '../shared/actions/adresse-action';
import { Adresse } from '../shared/models/adresse';
import { AdresseStateModel } from '../shared/states/adresse-state-model';
import { AdresseState } from '../shared/states/adresse-state';
//import { ControlFormService } from '../control-form.service';
import { User } from '../Models/User.model';
import { UserService } from '../shared/service/User.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{
 @Input() newUser : User = {} as User;
  //public user : User = new User("","","");

  //@Input() Nom : string = "";
  //@Input() Prenom : string = "";
  //@Input() Pays : string = "";

 
  constructor(private store:Store) { }
  
  adresse : Observable<Adresse[]> | undefined;

  @Select(AdresseState.getNbAdresses) nb$!: Observable<number>;
  
  @Select(AdresseState.getListeAdresse) liste$!: Observable<Adresse[]> ;
  
 
  ngOnInit():void  {
    //this.user = this.Users.user;
 
  }
  addAdresse(adresse:Adresse){
    this.store.dispatch(new AddAddress(adresse));
  }
 
}
