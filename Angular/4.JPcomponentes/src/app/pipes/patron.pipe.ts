import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatron',
  standalone: true
})
export class PatronPipe implements PipeTransform {       //IMPORTANTE: any se usa para los objetos

  transform(value: any[], patron:string): any[] {        //primer value es lo que recibe de entrada (a la izquierda del pipe en el template), en args se le pone el patron, lo ultimo se pone el array de salida
    if (value && value.length) {                         //si value (lo que recibe) es distinto de null o undefined
      return value.filter(a => a.nombre.toLowerCase().includes(patron.trim().toLocaleLowerCase()));          //los filters se ponen siempre en el return
    }
    else {      //si no, retornar un array vacío
      return []
    }
  }
}
