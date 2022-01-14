import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../Models/User.model';

//import { UserService } from '../shared/service/User.service';
import { TelephonePipe } from '../pipes/telephone.pipe';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent  implements OnInit{

  //val: string = 'valeur';
  //Civilite : string = "";
  //Nom : string = "";
  //Prenom : string = "";
  //Pays : string = "";
  //Email : string = "";
  //Login : string = "";
  //Adresse : string = "";
  //CP : string = "";
  //Ville : string = "";
  //Telephone :  string = "";
  //Password : string = "";

 registerForm: FormGroup = new FormGroup({});
  submitted = false;
  valid : boolean = false;
  newUser: User = {} as User;
  validated: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
     Civilite: ['',[Validators.required]],
      Nom: ['',[Validators.required, Validators.pattern(/[a-zA-Z ,.'-]{3,}/)]],
      Prenom: ['',[Validators.required, Validators.pattern(/[a-zA-Z ,.'-]{3,}/)]],
      Pays: ['',[Validators.required, Validators.pattern(/[a-zA-Z ,.'-]{3,}/)]],
      Adresse: ['',[Validators.required, Validators.pattern(/^([0-9]{1,6})([a-zA-Z ,.'-]{3,})/)]],
      CP : ['', [Validators.required, Validators.pattern(/[0-9]{5}/)]],
      Telephone: ['',[Validators.required,  Validators.pattern(/[0-9]{10}/)]],
      Email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['',[Validators.required, Validators.pattern(/[a-zA-Z ,.'-]{3,}/)]],
      Login: ['',[Validators.required,,Validators.maxLength(15), Validators.pattern(/[a-zA-Z ,.'-]{3,}/)]],
    });
   }
  ngOnInit(): void {  }
 

 
  
  


onSubmitForm() {
  const formValue = this.registerForm.value;
  this.newUser = new User(
    formValue['Civilite'],
    formValue['Nom'],
    formValue['Prenom'],
    formValue['Pays'],
    formValue['Adresse'],
    formValue['CP'],
    formValue['Login'],
    formValue['Password'],
    formValue['Telephone'],
    formValue['Email'],
    
    
    );
  
   
    
    this.validated = true;
  
    console.log(this.validated);
  
}
get Prenom() { return this.registerForm.get('Prenom');}
  get Nom() { return this.registerForm.get('Nom');}
  get Pays() { return this.registerForm.get('Pays');}
  get Adresse() { return this.registerForm.get('Adresse');}
  get CP() { return this.registerForm.get('CP');}
  get Telephone() { return this.registerForm.get('Telephone');}
  get Email() { return this.registerForm.get('Email');}
  get Password() { return this.registerForm.get('Password');}
  get Login() { return this.registerForm.get('Login');}
  get Civilite() { return this.registerForm.get('Civilite');}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}


