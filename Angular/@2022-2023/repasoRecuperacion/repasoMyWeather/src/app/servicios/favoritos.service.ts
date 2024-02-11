import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private fav:Array<any> = []
  private ciudadHome:any

  constructor() { 
    let guardarFav = localStorage.getItem('favs') || "[]"
    this.fav = JSON.parse(guardarFav)

    let guardarCiudad = localStorage.getItem('ciudadHome') || "{}"
    this.ciudadHome = JSON.parse(guardarCiudad)
  }


  addFav(ciudad:any) {                                                //se pasa como parametro ciudad de tipo any
    if (!this.fav.includes(ciudad)) {                                 //si NO hay ciudad en la ranura del localStorage llamada 'favs'
      this.fav.push(ciudad)                                           //introduce ciudad en el array fav
      localStorage.setItem("favs", JSON.stringify(this.fav))          //convierte el array 'fav' en un string para meterlo a 'favs' del localStorage?????
    }
  }

  delFav(ciudad:string) {
    let posicion = this.fav.indexOf(ciudad)                           //la variable posicion es igual a la posicion en el que se encuentra la ciudad. si no lo encuentra devolvera -1 
    if (posicion != -1) {                                             //si posicion es distinto de -1, hara la siguiente condicion
      this.fav.splice(posicion, 1)                                    //elimina la posicion donde se encuentra (el valor de la variable posicion) y el '1' es el numero de elementos que se van a eliminar
      localStorage.setItem("favs", JSON.stringify(this.fav))
    }
  }

  getFavs():Array<string> {
    return this.fav
  }

  getFavsPatron(patron:string):Array<string> {
    let resultado:Array<string> = []
    for (let i = 0; i < this.fav.length; i++) {
      if (this.fav[i].toLoweCase().includes(patron.toLowerCase())) {
        resultado.push(this.fav[i])
      }
    }
    return resultado
  }

  isFav(ciudad:string) {
    if (ciudad==this.ciudadHome) {
      return true
    }
    else {
      return false
    }
  }

  isHome(ciudad:string) {
    if (ciudad==this.ciudadHome) {
      return true
    }
    else {
      return false
    }
  }

  setCiudadHome(ciudad:any) {
    if (ciudad) {
      this.ciudadHome = ciudad
      localStorage.setItem('ciudadHome', JSON.stringify(ciudad))
    }
  }

  getCiudadHome() {
    return this.ciudadHome
  }

  incluyeFav(id:number) {
    let incluye = false
    for (let i = 0; i < this.fav.length; i++) {
      if (this.fav[i].id == id) {
        incluye = true
      }
    }
    return incluye
  }


}
