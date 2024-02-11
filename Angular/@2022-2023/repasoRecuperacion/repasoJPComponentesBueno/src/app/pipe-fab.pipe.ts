import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFab'
})
export class PipeFabPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
