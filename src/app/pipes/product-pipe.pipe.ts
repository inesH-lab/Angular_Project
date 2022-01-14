import { Pipe, PipeTransform } from '@angular/core';
import { Productmodel } from '../productmodel.model';
@Pipe({
  name: 'productPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(products: any, type?: any): any {
    if (type === undefined) return products;

    return products.filter(function(product: { name: string; info:string}){
      return product.name.toLowerCase().includes(type.toLowerCase())
      || product.info.toLowerCase().includes(type.toLowerCase())
    })
  }

}
