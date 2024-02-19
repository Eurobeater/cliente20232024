import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { TiempoPipe } from '../../pipes/tiempo.pipe';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TiempoPipe],
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

  getArtistas(){
    return this.getCanciones().map((cancion:any) => cancion.artist).filter(
      (value:any, index:any, artist:any) =>
        artist.indexOf(value) === index).length
  }

  getPromedioArtistas() {
    return this.bd.promedioArtistas()
  }

  topSongByLength() {
    return this.bd.topSongByLength()
  }

}
