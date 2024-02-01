import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCat',
  standalone: true
})
export class FiltroCatPipe implements PipeTransform {

  transform(value: any[], cat: number): any[] {
    if ((value !== null || value!== undefined) && value.length) {
      if (cat > 0) {
        return value.filter(a => a.cat == cat)
      }else {
        return value
      }
    }else {
      return [];
    }
  }
}
