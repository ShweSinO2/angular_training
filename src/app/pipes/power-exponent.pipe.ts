import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerExponent'
})
export class PowerExponentPipe implements PipeTransform {

  transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }

}
