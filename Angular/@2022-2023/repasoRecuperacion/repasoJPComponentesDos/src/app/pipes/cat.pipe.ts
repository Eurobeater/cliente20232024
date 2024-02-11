import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cat'
})
export class CatPipe implements PipeTransform {

  transform(articulos: Array<any>, filtroCat:number):Array<any> {
    if (filtroCat == 0) return articulos
    else return articulos.filter( a => a.cat == filtroCat );
  }

}
