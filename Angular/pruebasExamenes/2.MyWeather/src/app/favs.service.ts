import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  ciudadesFavs:any = []
  ciudadDefault:any = []

  constructor() {
    this.ciudadesFavs = JSON.parse(localStorage.getItem("favs") || "[]")
    this.ciudadDefault = JSON.parse(localStorage.getItem("default") || "[]")
  }

  addFav(ciudad:any) {
    //if (this.ciudadDefault.length < 1) {
      //this.addDefault(ciudad)
    //}
    this.ciudadesFavs.push(ciudad)
    this.saveFavsToLocalStorage()
    console.log(this.ciudadesFavs)

  }

  delFav(ciudad:any) {
    let posicion = this.ciudadesFavs.findIndex( (c:any) => c.id == ciudad.id )                //si se queja en la c, ponerle el tipado con los paréntesis
    if (posicion >= 0) {
      this.ciudadesFavs.splice(posicion,1)
      this.saveFavsToLocalStorage()
      console.log(ciudad)
      console.log(this.ciudadesFavs.length)
    }
  }

  addDefault(ciudad:any) {
    if (this.ciudadDefault.length < 1) {
      this.ciudadDefault.push(ciudad)
      this.saveDefaultToLocalStorage()
      console.log(this.ciudadDefault)
    }else {
      this.ciudadDefault.splice(0, 1)
      this.ciudadDefault.push(ciudad)
      this.saveDefaultToLocalStorage()
      console.log(this.ciudadDefault)
    }
  }

  getFavs() {
    return this.ciudadesFavs
  }

  getDefault() {
    return this.ciudadDefault
  }

  saveFavsToLocalStorage() {
    localStorage.setItem("favs", JSON.stringify(this.ciudadesFavs) )
  }

  saveDefaultToLocalStorage() {
    localStorage.setItem("default", JSON.stringify(this.ciudadDefault) )
  }
}
