import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { TarjetaComponent } from '../favs/tarjeta/tarjeta.component';
import { FavsService } from '../../favs.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor (private favsService:FavsService) {}

  getDefault() {
    return this.favsService.getDefault()
  }
}
