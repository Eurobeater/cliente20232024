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
    this.ciudadesFavs = this.ciudadesFavs.filter( (c:any) => c.name != ciudad.name )        //si se queja en la c, ponerle el tipado con los paréntesis. lo hemos hecho asi porque con findIndex no se actualizan las ciudades favoritas en el navegador hasta que se escriba en el input
    this.saveFavsToLocalStorage()
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
