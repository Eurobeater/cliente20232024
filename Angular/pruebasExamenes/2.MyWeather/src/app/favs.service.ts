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

  delFav(index:number) {
    this.ciudadesFavs.splice(index, 1)
    console.log(this.ciudadesFavs)
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

  getDefault() {
    return this.ciudadDefault
  }

  constructor() { }
}
