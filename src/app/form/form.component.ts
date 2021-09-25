import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      Civilite:['',[Validators.required]],
      Nom: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],
      Prenom: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],
      Login: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],
      email: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],
      password: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ,.'-]{1,}/)]],


    });
  }
  
  // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


Nom = new FormControl('', Validators.required);
onSubmit() {
    console.log('hello');
    console.log(this.f.Nom);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    console.log('valeurs: ', JSON.stringify(this.registerForm.value));

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}


