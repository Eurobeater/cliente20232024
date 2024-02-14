import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPais',
  standalone: true
})
export class FiltroPaisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
