import { Component } from '@angular/core';
import { BdService } from '../../bd.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private bd:BdService){}

  getCanciones() {
    return this.bd.getCanciones()
  }

  getPlaylists() {
    return this.bd.getPlaylists()
  }

  getArtists() {
    let artistas = 0
    let canciones = this.bd.getCanciones()
    artistas = canciones.length
    console.log(artistas)
    return artistas
  }

}
