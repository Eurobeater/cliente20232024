import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private favs:Array<any>  = []

  constructor() {
    let savedFavs = localStorage.getItem('favs') || '[]'
    this.favs = JSON.parse(savedFavs)
   }

  agregarFavorito(pelicula:any){
    this.favs.push(pelicula);
    localStorage.setItem('favs', JSON.stringify(this.favs))
  }

  obtenerFavoritos(){
    if(localStorage.getItem('favs')){
      this.favs = JSON.parse(localStorage.getItem('favs') || '{}');
    }
    return this.favs;
  }

  eliminarFavorito(id:string){
    this.favs = this.favs.filter((pelicula:any) => pelicula.imdbID !== id);
    localStorage.setItem('favs', JSON.stringify(this.favs))
  }

  vaciarFavoritos(){
    this.favs = []; 
    localStorage.setItem('favs', JSON.stringify(this.favs))
  }

  comprobarFavorito(id:string){
    return this.favs.some((pelicula:any) => pelicula.imdbID === id);
  }
}
