import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private arrayCarrito:any = []

  getArrayCarrito() {
    return this.arrayCarrito
  }

  anadirCarrito(articulo:any) {
    this.arrayCarrito.push(articulo)
  }

  quitarCarrito(indice:number) {
    this.arrayCarrito.splice(indice, 1)
  }

  constructor() { }
}
