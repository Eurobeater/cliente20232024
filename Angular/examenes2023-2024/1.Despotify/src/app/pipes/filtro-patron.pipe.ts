import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatron',
  standalone: true
})
export class FiltroPatronPipe implements PipeTransform {

  transform(value: any[], patron: string): any[] {
    if (value && value.length)
      return value.filter(
      c => c.title.toLowerCase().includes(patron.toLowerCase()) || c.artist.toLowerCase().includes(patron.toLowerCase()) )
    else
      return []
  }

}
