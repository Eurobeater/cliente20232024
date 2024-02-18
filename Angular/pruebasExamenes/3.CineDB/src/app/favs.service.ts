import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  peliculasFavs:any = []
  peliculaDetalles:any = []

  constructor() {
    this.peliculasFavs = JSON.parse(localStorage.getItem("favs") || "[]")
  }

  getFavs() {
    return this.peliculasFavs
  }

  addFavs(pelicula:any) {
    let comprobador = this.isAlreadyInFav(pelicula)
    if (!comprobador) {
      let newPelicula = { ...pelicula}
      this.peliculasFavs.push(newPelicula)
      this.saveFavsToLocalStorage()
    }
    console.log(comprobador)
  }

  delFavs(pelicula:any) {
    this.peliculasFavs =  this.peliculasFavs.filter( ( p:any ) => p.imdbID != pelicula.imdbID)
    this.saveFavsToLocalStorage()
  }

  getPeliculaDetalles(id: string) {
    return this.peliculasFavs.find((p: any) => p.imdbID === id);
  }

/*
  setPeliculaDetalles(pelicula:any) {
    if (this.peliculaDetalles.length == 0) {
      this.peliculaDetalles.push(pelicula)
      console.log(this.peliculaDetalles)
      console.log("Array vacio")
    } else {
      this.peliculaDetalles.splice(0, 1)
      this.peliculaDetalles.push(pelicula)
      console.log(this.peliculaDetalles)
      console.log("Array lleno")
    }
  }
*/

  isAlreadyInFav(pelicula:any) {
    return this.peliculasFavs.find( ( p:any ) => p.imdbID == pelicula.imdbID)
  }

  saveFavsToLocalStorage() {
    localStorage.setItem("favs", JSON.stringify(this.peliculasFavs) )
  }

}
