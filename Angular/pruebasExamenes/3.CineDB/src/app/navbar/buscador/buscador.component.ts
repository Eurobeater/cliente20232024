import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor(private bd:BdService){}

  patron = ""
  resultados:any = []

  buscarPeliculasPorPatron(patron:string) {
    if (this.patron.trim().length) {
      this.bd.buscarPeliculasPorPatron(patron.trim()).subscribe(
        json => {
          let response:any = json
          this.resultados = response.list
        }
      )
    }
  }

  getPeliculas() {
    return this.resultados
  }

}
