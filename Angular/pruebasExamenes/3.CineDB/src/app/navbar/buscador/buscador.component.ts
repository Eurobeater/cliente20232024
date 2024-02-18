import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { FormsModule } from '@angular/forms';
import { FavsService } from '../../favs.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor(private bd:BdService, private favs:FavsService){}

  patron = ""
  private resultados:any = []

  buscarPeliculasPorPatron() {
    if (this.patron.trim().length) {
      this.bd.buscarPeliculasPorPatron(this.patron.trim()).subscribe(
        json => {
          let response:any = json
          this.resultados = response.Search                                                       //SUPER IMPORTANTE: usar response.Search en las APIS donde las búsquedas se guarden en la propiedad search. list en las APIs que usen la propiedad list
          console.log("text" + this.bd.buscarPeliculasPorPatron("Guardians of the Galaxy"))
          console.log(this.resultados)
        }
      )
    }
  }

  getResultados() {
    return this.resultados
  }

  addFavs(id:number) {
    return this.favs.addFavs(id)
  }

}
