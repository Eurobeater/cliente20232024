import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  ciudadesFavs:any = []
  ciudadDefault:any = []

  addFav(ciudad:any) {
    this.ciudadesFavs.push(ciudad)
    console.log(this.ciudadesFavs)
  }

  delFav(ciudad:any) {
    let posicion = this.ciudadesFavs.findIndex( (c:any) => c.id == ciudad.id )                //si se queja en la c, ponerle el tipado con los paréntesis
    if (posicion >= 0) {
      this.ciudadesFavs.splice(posicion,1)
      console.log(ciudad)
      console.log(this.ciudadesFavs.length)
      //this.saveToLocalStorage()
    }
  }

  addDefault(ciudad:any) {
    if (this.ciudadDefault.length < 1) {
      this.ciudadDefault.push(ciudad)
      console.log(this.ciudadDefault)
    }else {
      this.ciudadDefault.splice(0, 1)
      this.ciudadDefault.push(ciudad)
      console.log(this.ciudadDefault)
    }
  }

  getFavs() {
    return this.ciudadesFavs
  }

  getDefault() {
    return this.ciudadDefault
  }

  constructor() { }
}
