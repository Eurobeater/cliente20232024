import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFab',
  standalone: true
})
export class FiltroFabPipe implements PipeTransform {

  transform(value: any[], fab: number): any[] {
    if (value && value.length) {
      if (fab > 0) {
        return value.filter(a => a.fab == fab)
      } else {
        return value
      }
    } else {
      return []
    }
  }

}
