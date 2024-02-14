import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinCelsius',
  standalone: true
})
export class KelvinCelsiusPipe implements PipeTransform {                                             //ESTE PIPE NO SE USA

  transform(value: number): string {
    if (value) {
      let pasarCelsius = (value - 273.15).toFixed(1)
      return pasarCelsius
    }
    return ""
  }
}
