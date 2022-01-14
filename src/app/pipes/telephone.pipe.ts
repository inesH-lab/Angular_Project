import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {
  NumeroPiped: string =';'
  transform(Numero: string) :string {
    

    if (Numero.length == 10) {
      this.NumeroPiped = Numero.slice(1, 10);
      this.NumeroPiped = '+33' + this.NumeroPiped;
    }
  return this.NumeroPiped;
}

}
