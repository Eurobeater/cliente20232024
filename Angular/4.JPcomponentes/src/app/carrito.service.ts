import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private arrayCarrito:any = []
  //anadirCarrito = this.arrayCarrito.push()

  getArrayCarrito() {
    return this.arrayCarrito
  }

  anadirCarrito() {
    this.arrayCarrito.push()
  }

  quitarCarrito() {
    this.arrayCarrito.slice()
  }

  constructor() { }
}
