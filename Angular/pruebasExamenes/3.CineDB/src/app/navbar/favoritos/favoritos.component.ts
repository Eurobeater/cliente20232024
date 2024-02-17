import { Component } from '@angular/core';
import { FavoritoComponent } from './favorito/favorito.component';
import { FavsService } from '../../favs.service';
import { FormsModule } from '@angular/forms';
import { FiltroPatronPipe } from '../../pipes/filtro-patron.pipe';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [FavoritoComponent, FormsModule, FiltroPatronPipe],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

  constructor(private favs:FavsService) {}

  patron = ""

  getFavs() {
    return this.favs.getFavs()
  }

}
