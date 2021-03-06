import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LowercasePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'lowercase',
})
export class LowercasePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args) {
    console.log(args);
    return value.toLowerCase();
  }
}
