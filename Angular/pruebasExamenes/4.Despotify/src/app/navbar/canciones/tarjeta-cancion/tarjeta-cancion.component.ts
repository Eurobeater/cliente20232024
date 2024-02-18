import { Component, Input } from '@angular/core';
import { BdService } from '../../../bd.service';

@Component({
  selector: 'app-tarjeta-cancion',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-cancion.component.html',
  styleUrl: './tarjeta-cancion.component.css'
})
export class TarjetaCancionComponent {
  @Input() cancion:any

  constructor(private bd:BdService) {}

  addPlaylist(cancion:any) {
    return this.bd.addPlaylist(cancion)
  }

}
