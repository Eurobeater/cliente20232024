import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nom'
})
export class NomPipe implements PipeTransform {

  transform(articulos: Array<any>, patron: String): Array<any> {
    if (patron == "" ) return articulos
    else return articulos.filter(a => a.nombre.toLowerCase().includes(patron.toLowerCase()))
  }

}
