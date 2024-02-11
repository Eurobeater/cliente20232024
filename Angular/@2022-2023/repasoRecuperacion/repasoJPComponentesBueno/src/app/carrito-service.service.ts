import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {
  private articulos:Array<any> = []

  constructor() { }

  getCart() {
    return this.articulos
  }

  addToCart(articulo:any) {
    articulo.units = 1
    this.articulos.push(articulo)
    console.log(this.articulos)
  }

  isInCart(articulo:any) {
    return this.articulos.includes(articulo)
  }

  addUnits(articulo:any, newUnits:number = 1) {
    let art = this.articulos.find( a => a.id == articulo.id )
    if (art) {
      art.units += newUnits
      console.log(this.articulos)
    }
  }

  decUnits(articulo:any, units:number = 1) {
    let art = this.articulos.find( a => a.id == articulo.id )
    if (art.units >= units)
      art.units -= units
    else
      art.units = 0
  }

  public delUnits(articulo: string) {
    let pos = this.articulos.findIndex((a) => a.id == articulo)
    this.articulos.splice(pos, 1)
  }

}
