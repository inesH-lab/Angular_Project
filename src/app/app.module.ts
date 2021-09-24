import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './validation/validation.component';
import { TertiaireComponent } from './tertiaire/tertiaire.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ValidationComponent,
    TertiaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
