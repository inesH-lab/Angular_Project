import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../Models/User.model';
import { TestingDirective } from './testing.directive';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent  implements OnInit{

  val: string = 'valeur';
  Civilite : string = "";
  Nom : string = "";
  Prenom : string = "";
  Pays : string = "";
  Email : string = "";
  Login : string = "";
  Adresse : string = "";
  CP : string = "";
  Ville : string = "";
  Telephone :  string = "";
  Password : string = "";

  registerForm: FormGroup = new FormGroup({Nom: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z ,.'-]{3,}/)]),});
  submitted = false;
  valid : boolean = false;

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      //Civilite:['',[Validators.required]],
      Nom: ['',[Validators.required, Validators.pattern(/[a-zA-Z ,.'-]{3,}/)]],
      Prenom: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],
      Login: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],
      email: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],
      password: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],


    }); 
  }
  getColor(): string {
    return 'red';
  }

  validation() {
    return true;
  }
   // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
  constructor(private formBuilder: FormBuilder) { }



onSubmit() {
    console.log('hello');
    
    //this.submitted = true;
    

    // stop here if form is invalid
   // if (this.registerForm.invalid) {
     //   return;
   // }
  
   
    this.valid =true;
    //alert('Récapitulatif\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    console.log(this.valid);
  
}

onReset() {
    //this.submitted = false;
    //this.registerForm.reset();
}

}


