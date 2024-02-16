import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  constructor() { }

  private peliculasFavs:any = []

  getFavs() {
    return this.peliculasFavs
  }

  addFavs(pelicula:any) {
    let comprobador = this.isAlreadyInFav(pelicula)
    //if (!comprobador) {
      let newPelicula = { ...pelicula}
      this.peliculasFavs.push(newPelicula)
      console.log(newPelicula)
      console.log(this.peliculasFavs)
    //}
    console.log(comprobador)
  }

  delFavs(pelicula:any) {
    this.peliculasFavs =  this.peliculasFavs.filter( ( p:any ) => p.id != pelicula.id)
  }

  isAlreadyInFav(pelicula:any) {
    return this.peliculasFavs.find( ( p:any ) => p.id == pelicula.id)
  }

}
