import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  favoritos: string[] = [];

  constructor() {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      this.favoritos = JSON.parse(favoritosGuardados);
    }
  }

  añadirFavorito(city: string) {
    if (!this.favoritos.includes(city)) {
      this.favoritos.push(city);
      localStorage.setItem('favorites', JSON.stringify(this.favoritos));
    }
  }

  borrarFavorito(city: string) {
    const index = this.favoritos.indexOf(city);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favoritos));
    }
  }

  getFavoritos(): string[] {
    return this.favoritos;
  }
}
