import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  constructor(private route: ActivatedRoute, private productService: ProductserviceService) { }
 
  ngOnInit(): void {
  }

}
