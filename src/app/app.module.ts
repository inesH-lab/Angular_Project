import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './validation/validation.component';
import { TertiaireComponent } from './tertiaire/tertiaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResearchComponent } from './research/research.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { ProductState } from './shared/states/product-state';
import { NgxsModule } from '@ngxs/store';
import { DetailComponent } from './detail/detail.component';
import { TelephonePipe } from './pipes/telephone.pipe';
import { ProductPipePipe } from './pipes/product-pipe.pipe';
import { ProductPipeCategoryPipe } from './pipes/product-pipe-category.pipe';
import { LoginService } from './shared/service/login.service';
import { ApiLoginInterceptor } from './api-login.interceptor';

const appRoutes: Routes = [
  {
    path: 'product' , component: ProductComponent
   },
   {
    path: 'auth' , component: AuthComponent
   },
  {
    path: 'formulaire',
    component: FormComponent
  },
  { 
    path: 'detail' , 
    loadChildren: () => import('./detail/lazyloading.module'). then((m)  => m.LazyLoadingModule) },

  { 
    path: '' , component: FormComponent},
    
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductComponent,
    ValidationComponent,
    TertiaireComponent, 
    NavbarComponent,
    AuthComponent,
    PanierComponent,
    ResearchComponent,
    TelephonePipe,
    ProductPipePipe,
    ProductPipeCategoryPipe,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ProductState]),
  ],
  providers: [
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiLoginInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
