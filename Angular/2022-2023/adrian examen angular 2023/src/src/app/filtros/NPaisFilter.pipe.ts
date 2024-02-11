import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NPaisFilter'
})
export class NPaisFilterPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'ES': return "España"; break
      case 'US': return "Estados Unidos"; break
      case 'GB': return "Reino Unido"; break
      case 'IT': return "Italia"; break
      case 'FR': return "Francia"; break
      case 'DE': return "Alemania"; break
      case 'CA': return "Canadá"; break
      case 'AU': return "Australia"; break
      case 'BR': return "Brasil"; break
      case 'RU': return "Rusia"; break
      case 'CN': return "China"; break
      case 'JP': return "Japón"; break
      case 'IN': return "India"; break
      case 'KR': return "Corea del Sur"; break
      case 'MX': return "México"; break
      case 'AR': return "Argentina"; break
      case 'ZA': return "Sudáfrica"; break
      case 'SE': return "Suecia"; break
      case 'NL': return "Países Bajos"; break
      case 'CH': return "Suiza"; break
      case 'AT': return "Austria"; break
      case 'BE': return "Bélgica"; break
      case 'DK': return "Dinamarca"; break
      case 'FI': return "Finlandia"; break

    }
    return "(España)"
  }

}
