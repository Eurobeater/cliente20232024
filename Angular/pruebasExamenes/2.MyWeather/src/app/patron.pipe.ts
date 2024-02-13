import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patron',
  standalone: true
})
export class PatronPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
