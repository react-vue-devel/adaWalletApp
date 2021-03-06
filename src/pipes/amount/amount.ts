import { Pipe, PipeTransform } from '@angular/core';
import { BigNumber } from 'bignumber.js';

/**
 * Generated class for the AmountPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'amount',
})
export class AmountPipe implements PipeTransform {
  transform(value: BigNumber) {
    if(value){
      let x: BigNumber = new BigNumber (value);
      return x.dividedBy(1000000);
    }
    return value;    
  }
}
