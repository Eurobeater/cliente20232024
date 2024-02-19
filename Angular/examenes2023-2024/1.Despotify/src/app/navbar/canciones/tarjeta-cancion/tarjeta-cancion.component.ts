import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TiempoPipe } from '../../../pipes/tiempo.pipe';
import { BdService } from '../../../bd.service';

@Component({
  selector: 'app-tarjeta-cancion',
  standalone: true,
  imports: [TiempoPipe, DatePipe],
  templateUrl: './tarjeta-cancion.component.html',
  styleUrl: './tarjeta-cancion.component.css'
})
export class TarjetaCancionComponent {
  @Input() cancion:any

  constructor(private bd:BdService) {}

  addToPlaylist(cancion:any) {
    return this.bd.addToPlaylist(cancion)
  }

}
