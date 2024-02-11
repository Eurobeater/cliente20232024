import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito:any[] = [];

  constructor() {}

  getCarrito() {
    if(this.carrito.length === 0) {
      this.carrito = JSON.parse(localStorage.getItem('carrito') || '{}');
      return this.carrito;
    } else {
      return this.carrito
    }
  }

  getPrecio(articulo:any) {
    return articulo.precio * articulo.cantidad;
  }
  
  
  addCarrito(articulo:any){
    let cantidad = 1
    articulo = {...articulo, cantidad}
    this.carrito.push(articulo);
    localStorage.setItem('carrito', JSON.stringify(this.carrito))
  }

  removeFromCarrito(articulo:any){
    this.carrito = this.carrito.filter(item => item.id !== articulo.id);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  isAlreadyInCart(articulo:any){
    return this.carrito.find(item => item.id === articulo.id);
  }

  decrementsUnits(articulo:any){
    if(articulo.cantidad === 1){
      this.removeFromCarrito(articulo);
    } else{
      articulo.cantidad--;
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  incrementsUnits(articulo:any){
    articulo.cantidad++;
    localStorage.setItem('cart', JSON.stringify(this.carrito));
  }

  recalculatePrice(){
    let price = 0;
    this.carrito.forEach(articulo => {
      price += this.getPrecio(articulo);
    })
    return price;
  }

}



