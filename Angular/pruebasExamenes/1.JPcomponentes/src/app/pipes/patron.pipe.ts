import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatron',
  standalone: true
})
export class FiltroPatronPipe implements PipeTransform {

  transform(value: any[], patron: string): any[] {
    if ((value !== null || value!== undefined) && value.length) {
      return value.filter(a => a.nombre.toLowerCase().includes(patron.trim().toLowerCase()))
    }else {
      return []
    }
  }
}
