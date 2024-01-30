import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Array<any>

  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]")
  }

  addToCart(art:any) {
    //comprobar si ya existe en el carrito
    let a = this.isAlreadyInCart(art)
    if (a) {
      a.unidades++
    } else {
      let newArt = { ...art}
      newArt.unidades = 1
      // let newArt = {
      //   id: art.id,
      //   cat: art.cat,
      //   fab: art.fab,
      //   nombre: art.nombre,
      //   imagen: art.imagen,
      //   precio: art.precio,
      //   unidades: 1
      // }
      this.cart.push(newArt)
    }
    this.saveToLocalStorage()
  }

  getCart() {
    return this.cart
  }

  getCartTotal() {
    let total = 0
    this.cart.forEach( a => total += a.unidades * a.precio)
    return total
  }

  isAlreadyInCart(art:any) {
    return this.cart.find( a => a.id == art.id )
  }

  decrUnits(art:any) {
    if (art.unidades > 0) {
      art.unidades--
      this.saveToLocalStorage()
    }
  }
  incrUnits(art:any) {
    art.unidades++
    this.saveToLocalStorage()
  }

  delArt(art:any) {
    let posicion = this.cart.findIndex( a => a.id == art.id )
    if (posicion >= 0) {
      this.cart.splice(posicion,1)
      this.saveToLocalStorage()
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart) )
  }
}
