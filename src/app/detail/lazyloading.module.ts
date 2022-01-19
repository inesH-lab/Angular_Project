import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { PanierComponent } from "../panier/panier.component";
import { RouterModule,Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from '@ngxs/store';
import { ProductState } from "../shared/states/product-state";
import { DetailComponent } from "./detail.component";
//RouterModule.forChild(appChild)
const appChild: Routes = [
  {
    path: 'detail/:detail',
    component: DetailComponent,
  },
];
  
  @NgModule({
    declarations: [
      DetailComponent,
    
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(appChild),
      ReactiveFormsModule,
      
    ]
  })
  export class LazyLoadingModule { }