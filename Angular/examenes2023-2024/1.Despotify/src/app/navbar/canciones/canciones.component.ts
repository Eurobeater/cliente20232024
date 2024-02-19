import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { TarjetaCancionComponent } from './tarjeta-cancion/tarjeta-cancion.component';
import { FilaCancionComponent } from './fila-cancion/fila-cancion.component';
import { FormsModule } from '@angular/forms';
import { FiltroPatronPipe } from '../../pipes/filtro-patron.pipe';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [TarjetaCancionComponent, FilaCancionComponent, FormsModule, FiltroPatronPipe],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent {

  constructor(private bd:BdService){}

  vistaTarjetas: boolean = true;
  patron = ""

  getCanciones() {
    return this.bd.getCanciones()
  }

  getPlaylists() {
    return this.bd.getPlaylists()
  }

  toggleView() {
    this.vistaTarjetas = !this.vistaTarjetas
    console.log(this.vistaTarjetas)
  }

}
