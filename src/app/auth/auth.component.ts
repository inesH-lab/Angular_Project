import { Component, OnInit } from '@angular/core';

import {  AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../Models/User.model';
//import { Users } from 'src/app/models/users';
import { LoginService } from '../shared/service/login.service';
//import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  
  loginForm : FormGroup;
  user$!: Observable<User>;

  constructor(private formBuilder: FormBuilder, private loginservice:LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      password: ['',Validators.required],
      login: ['',[Validators.required, Validators.pattern("^[0-9a-zA-Z.-]*$")]]    
   });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid)
    {
      //console.log(this.loginForm.value);
      this.loginservice.postLogin(this.login?.value, this.password?.value).subscribe(
        (val) => {
          
          console.log("Connected !");
          this.user$ = this.loginservice.getLogin(this.login?.value);
          this.router.navigate(['product']);
        }
      )
    }
    else
    {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control?.markAsTouched({ onlySelf: true});
      });
    }
  }

  get password() { return this.loginForm.get('password');}
  get login() { return this.loginForm.get('login');}

}
