import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByString',
  standalone: true
})
export class FilterByStringPipe implements PipeTransform {

  transform(value: any[] , patron: string): any[] {
                                                                                            //any o listadoMarket: any[]
    if (!patron || patron == "" || value.length == 0) {                                     //if (patron =! null || patron =! undefined || patron == "")
      return value
    }else {
      return value.filter (c => c.name.toLowerCase().includes(patron.trim().toLowerCase())       //(c => c.name.includes(patron))
                              || c.symbol.toLowerCase().includes(patron.trim().toLowerCase())                                                        )
    }
  }
}
