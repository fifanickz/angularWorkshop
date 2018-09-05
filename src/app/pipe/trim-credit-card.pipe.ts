import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: any, args?: string): any {
   const _first = value.substr(0 , 3);
   const _last = value.substr(13 , 3);
   let _middle = '';

   for ( let i = 0;  i < 10 ; i++ ) {
     _middle += args;
   }

    return _first + _middle + _last;
  }

}
