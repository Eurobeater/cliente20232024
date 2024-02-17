import { Component, Input } from '@angular/core';
import { FavsService } from '../../../../favs.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  constructor(private favs:FavsService) {}

  getPeliculaDetalles() {
    return this.favs.getPeliculaDetalles()
  }

}
