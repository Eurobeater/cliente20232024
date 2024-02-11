import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TempFilter'
})
export class TempFilterPipe implements PipeTransform {

  transform(value: number):number {
    return Math.round(value - 273)
  }

}
