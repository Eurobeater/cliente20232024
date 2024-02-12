import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatronFavs',
  standalone: true
})
export class PatronFavsPipe implements PipeTransform {

  transform(value: any[], patron: string): any[] {
    if (value && value.length) {
      return value.filter( d => d.name.toLowerCase().includes( patron.toLowerCase() ) )
    }else {
      return []
    }
  }

}
