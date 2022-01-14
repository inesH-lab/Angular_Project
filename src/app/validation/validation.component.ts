import { Component, OnInit, Input} from '@angular/core';

//import { ControlFormService } from '../control-form.service';
import { User } from '../Models/User.model';
import { UserService } from '../shared/service/User.service';




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

 
  constructor() { }
  
 

  ngOnInit():void  {
    //this.user = this.Users.user;
 
  }

 
}
