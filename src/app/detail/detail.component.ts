import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../shared/models/product';
import { ProductserviceService } from '../productservice.service';
import { Productmodel } from '../productmodel.model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  ProductList: Productmodel[]= [];
  product: Productmodel[]=[];
  Products: Subscription | undefined;
  constructor(private route: ActivatedRoute, private productService: ProductserviceService) { }
  SubjectProducts$: Observable<Array<ProductserviceService>> | undefined ;
  ngOnInit(): void {

    this.Products = this.productService.SubjectProducts.subscribe(
      (product : Productmodel[]) =>{
        this.ProductList = product;
      }
    );
    this.productService.getCatalogue();
    this.productService.emitProduct();
     
  
    this.productService.getSingleProduct(this.route.snapshot.params['detail']);
  }


}
