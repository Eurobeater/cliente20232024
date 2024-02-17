import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatron',
  standalone: true
})
export class FiltroPatronPipe implements PipeTransform {

  transform(value: any[], patron: string): any[] {
    if (value && value.length) {
      return value.filter( p => p.Title && p.Title.toLowerCase().includes(patron.toLowerCase()))                      //si no pongo la validacion (p.Title &&), me devuelve un error en el pipe de undefined
    }else {
      return [];
    }
  }
}
