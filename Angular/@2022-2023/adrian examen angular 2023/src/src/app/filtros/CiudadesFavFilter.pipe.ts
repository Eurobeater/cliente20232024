import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CiudadesFavFilter'
})
export class CiudadesFavFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
