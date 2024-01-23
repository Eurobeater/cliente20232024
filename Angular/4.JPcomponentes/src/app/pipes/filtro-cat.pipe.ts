import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCat',
  standalone: true
})
export class FiltroCatPipe implements PipeTransform {

  transform(value: any[], cat:number): any[] {
    if (value && value.length) {
      if (cat > 0) {                              //en función del número, filtra por categoria
       return value.filter(a => a.fab == cat)
      }else {
       return value
      }
   }else {
     return []
   }
  }
}
