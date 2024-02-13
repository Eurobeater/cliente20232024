import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatron',
  standalone: true
})
export class PatronPipe implements PipeTransform {

  transform(value: any[], patron: string): any[] {
    if (value && value.length) {
      return value.filter( c => c.name.toLowerCase().includes( patron.toLowerCase() ) )
    }else {
      return []
    }
  }


}
