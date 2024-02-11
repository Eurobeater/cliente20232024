import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fabricante'
})
export class FabricantePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
