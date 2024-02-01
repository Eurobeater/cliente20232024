import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFab',
  standalone: true
})
export class FiltroFabPipe implements PipeTransform {

  transform(value: any[], fab: number): any[] {
    if ((value !== null || value!== undefined) && value.length) {
      console.log("Fabricante:" +fab)
      if (fab > 0) {
        return value.filter(a => a.fab == fab)
      }else {
        return value
      }
    }else {
      return [];
    }
  }
}
