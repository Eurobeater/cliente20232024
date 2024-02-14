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
    let comprobador = this.isAlreadyInFavs(ciudad)                                      //comprobar si ya existe en favoritos
    if (!comprobador) {                                                                 //if (comprobador == undefined). si 'comprobador' (guarda el return de la funcion isAlreadyInFavs()) devuelve undefined (no encuentra una coincidencia en la función) se añade al array. si 'comprobador' devuelve un objeto (encuentra coincidencia en la función) no se añade al array la ciudad repetida
      let newCiudad = { ...ciudad}
      this.ciudadesFavs.push(newCiudad)
      this.saveFavsToLocalStorage()
      console.log(this.ciudadesFavs)
      console.log(comprobador)
      console.log(this.isAlreadyInFavs(ciudad))
    }
  }

  delFav(ciudad:any) {
    this.ciudadesFavs = this.ciudadesFavs.filter( (c:any) => c.id != ciudad.id )        //si se queja en la c, ponerle el tipado con los paréntesis. lo hemos hecho asi porque con findIndex no se actualizan las ciudades favoritas en el navegador hasta que se escriba en el input
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

  isAlreadyInFavs(ciudad:any) {
    return this.ciudadesFavs.find( (c:any) => c.id == ciudad.id )
  }

  saveFavsToLocalStorage() {
    localStorage.setItem("favs", JSON.stringify(this.ciudadesFavs) )
  }

  saveDefaultToLocalStorage() {
    localStorage.setItem("default", JSON.stringify(this.ciudadDefault) )
  }
}
