import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './validation/validation.component';
import { TertiaireComponent } from './tertiaire/tertiaire.component';
import { TestingDirective } from './form/testing.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResearchComponent } from './research/research.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClient, HttpClientModule } from '@angular/common/http';
  
const appRoutes: Routes = [
  { path: 'formulaire', component: FormComponent},
  {path: 'product' , component: ProductComponent },
  { path: '' , component: FormComponent}
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductComponent,
    ValidationComponent,
    TertiaireComponent, 
    TestingDirective,
    NavbarComponent,
    AuthComponent,
    ResearchComponent,
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
