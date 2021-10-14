import { Component, OnInit, Input} from '@angular/core';

//import { ControlFormService } from '../control-form.service';
//import { User } from '../Models/User.model';





@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{

  @Input() valid : boolean = false;

  @Input() Nom : string = "";
  @Input() Prenom : string = "";
  @Input() Pays : string = "";

 
  constructor() { }
  
 

  ngOnInit():void  {
  
 
  }

 
}
