import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TiempoPipe',
  standalone: true
})
export class TiempoPipe implements PipeTransform {

  transform(s: number): string {
    let ms = s * 1000;
    let date = new Date(ms);
    return date.toISOString().substr(14, 5);
  }

}
