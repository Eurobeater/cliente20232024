import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(articulos: any[], categ:string): any[] {
    if(!categ){
      return articulos;
    } else {
      return articulos.filter(articulo => articulo.cat === categ);
    }
  }
}
