import { Component } from '@angular/core';
import { FavoritoComponent } from './favorito/favorito.component';
import { FavsService } from '../../favs.service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [FavoritoComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

  constructor(private favs:FavsService) {}

  getFavs() {
    return this.favs.getFavs()
  }

}
