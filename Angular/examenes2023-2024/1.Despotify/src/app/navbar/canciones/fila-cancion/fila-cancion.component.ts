import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TiempoPipe } from '../../../pipes/tiempo.pipe';
import { BdService } from '../../../bd.service';

@Component({
  selector: 'app-fila-cancion',
  standalone: true,
  imports: [DatePipe, TiempoPipe],
  templateUrl: './fila-cancion.component.html',
  styleUrl: './fila-cancion.component.css'
})
export class FilaCancionComponent {
  @Input() cancion:any

  constructor(private bd:BdService) {}

  addToPlaylist(cancion:any) {
    return this.bd.addToPlaylist(cancion)
  }
}
