import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTemp',
  standalone: true
})
export class FiltroTempPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
