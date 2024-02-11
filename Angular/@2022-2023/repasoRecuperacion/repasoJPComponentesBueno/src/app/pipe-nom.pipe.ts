import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNom'
})
export class PipeNomPipe implements PipeTransform {

  transform(articulos: Array<any>, patron: String): Array<any> {
    if (patron == "") return articulos
    else return articulos.filter( a => a.nombre.toLowerCase().includes( patron.toLowerCase() ) )
  }

}
