import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private fav:Array<any> = []
  private ciudadHome:any

constructor() {
  let guardarFav = localStorage.getItem('favs') || "[]"
  this.fav = JSON.parse(guardarFav)
  let guardarCiudad = localStorage.getItem('ciudadHome') || "{}"
  this.ciudadHome = JSON.parse(guardarCiudad)
}

addFav(ciudad:any) {
  if (!this.fav.includes(ciudad)) {
    this.fav.push(ciudad)
    localStorage.setItem("favs", JSON.stringify(this.fav))
  }
}

delFav(ciudad:string){
  let posicion = this.fav.indexOf(ciudad)
  if (posicion != -1) {
    this.fav.splice(posicion,1)
    localStorage.setItem("favs",JSON.stringify(this.fav))
  }
}

getFavs():Array<string> {
  return this.fav
}

getFavsPorPatron(patron:string):Array<string> {
  let resultado:Array<string> = []
  for (let i = 0; i < this.fav.length; i++) {
    if (this.fav[i].toLowerCase().includes(patron.toLowerCase())) {
      resultado.push(this.fav[i])
    }
  }
  return resultado
}

isFav(ciudad:string) {
  return this.fav.includes(ciudad)
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

//comprobar en localstorage favs si se encuentra la ciudad por el id
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
