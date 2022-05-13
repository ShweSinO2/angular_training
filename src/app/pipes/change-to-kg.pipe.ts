import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeToKG'
})
export class ChangeToKGPipe implements PipeTransform {

  transform(value: number): string {
    return (value * 1000).toFixed(2) + 'Kg';
  }

}
