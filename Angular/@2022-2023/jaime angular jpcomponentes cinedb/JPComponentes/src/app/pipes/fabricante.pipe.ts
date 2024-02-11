import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fabricante'
})
export class FabricantePipe implements PipeTransform {

  transform(articulos: any[], fab:string): any[] {
    if(!fab){
      return articulos;
    } else {
      return articulos.filter(articulo => articulo.fab === fab);
    }
  }

}
