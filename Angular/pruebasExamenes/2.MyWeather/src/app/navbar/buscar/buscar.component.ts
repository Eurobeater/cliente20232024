import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { FormsModule } from '@angular/forms';
import { PatronPipe } from '../../pipes/patron.pipe';
import { FavsService } from '../../favs.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormsModule, PatronPipe],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  constructor (private bd:BdService, private favsService:FavsService) { }

  private resultados:any                                                //un array vacío, que luego se llenara con las consultas a la API con búsquedas filtradas por patron

  patron = ""

  getResultados() {
    return this.resultados
  }

  buscarCiudad() {
    if (this.patron.trim().length) {                                    // Verifica que el patrón de búsqueda no esté vacío
      this.bd.getCiudadesPorPatron(this.patron.trim()).subscribe (             //llamar a la función del servicio y pasar de parámetro el patrón escrito en el input de búsqueda. usar la función subscribe() para recoger los objetos obtenidos de la llamada a la API en el servicio
        json => {
          let response:any = json                                       //asignar una variable llamada response, de tipo any
          this.resultados = response.list                               //los resultados de la búsqueda se asignan al array 'resultados'
        }
      )
    }
  }

  addFav(ciudad:any) {
    return this.favsService.addFav(ciudad)
  }

}
