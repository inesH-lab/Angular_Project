import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Productmodel } from '../productmodel.model';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText: any;
  //products = ProductList[];

  constructor() { }

  ngOnInit(): void {
  }

}
