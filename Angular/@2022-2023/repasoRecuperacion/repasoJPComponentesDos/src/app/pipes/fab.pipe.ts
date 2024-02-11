import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fab'
})
export class FabPipe implements PipeTransform {

  transform(articulos: Array<any>, filtroFab:number): Array<any> {
    if (filtroFab == 0) return articulos
    else return articulos.filter(a => a.fab == filtroFab);
  }

}
