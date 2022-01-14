import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipeCategory'
})
export class ProductPipeCategoryPipe implements PipeTransform {

  transform(data: any, radioValue: string) {

    return data.filter(
      (v: { category: string; }) => v.category.toLowerCase().indexOf(radioValue.toLowerCase()) > -1 );
  }
}
