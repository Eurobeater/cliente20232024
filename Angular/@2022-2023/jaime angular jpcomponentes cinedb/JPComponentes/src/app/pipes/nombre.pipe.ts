import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(articulos: any[], nom: string): any[] {
    if(!nom){
      return articulos;
    } else {
      return articulos.filter(articulo => articulo.nombre.toLowerCase().includes(nom.toLowerCase()));
    }
  }

}
