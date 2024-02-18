import { Component, Input } from '@angular/core';
import { FavsService } from '../../../favs.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorito',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.css'
})
export class FavoritoComponent {
@Input() peliculaFav:any

  constructor(private favs:FavsService, private router: Router) {}

  delFav(pelicula:any) {
    return this.favs.delFavs(pelicula)
  }

  verDetalles(id:string) {
    this.router.navigate(["/detail", id])
  }

}
