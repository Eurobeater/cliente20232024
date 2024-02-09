import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByString',
  standalone: true
})
export class FilterByStringPipe implements PipeTransform {

  transform(listadoMarket: any[], patron: string):any[] {
    if (!listadoMarket || listadoMarket.length == 0)
      //si nos viene un fallo en el 1er parámetro listadoMarket, devuelvo array vacío
      return []
    else if ( !patron || patron == "")
      //si nos viene un fallo en el 2º parámetro patron, devuelvo el array original sin filtrar
      return listadoMarket
    else {
      //si todo va bien, filtro por patrón
      return listadoMarket.filter( c => c.name.toLowerCase().includes(patron.trim().toLowerCase())
                                        || c.symbol.toLowerCase().includes(patron.trim().toLowerCase()) )
    }
  }

}
