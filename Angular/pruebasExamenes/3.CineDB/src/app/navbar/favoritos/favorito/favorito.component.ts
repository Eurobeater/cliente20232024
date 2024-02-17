import { Component, Input } from '@angular/core';
import { FavsService } from '../../../favs.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorito',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.css'
})
export class FavoritoComponent {
@Input() peliculaFav:any

  constructor(private favs:FavsService) {}

  delFav(pelicula:any) {
    return this.favs.delFavs(pelicula)
  }

  setPeliculaDetalles(pelicula:any) {
    return this.favs.setPeliculaDetalles(pelicula)
  }

}
