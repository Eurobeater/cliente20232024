import { Component } from '@angular/core';
import { FavoritosService } from 'src/app/favoritos.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  favoritos: string[] = [];

  constructor(private favoritosService: FavoritosService) {
    this.favoritos = this.favoritosService.getFavoritos();
  }

  ngOnInit() {
    this.favoritosService.getFavoritos();
    this.favoritos = this.favoritosService.favoritos;
  }

  eliminarFavorito(ciudad: string) {
    this.favoritosService.borrarFavorito(ciudad);
    this.favoritos = this.favoritosService.getFavoritos();
  }
}
