import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:any[] = [];

  constructor() { }

  getCart(){
    if(this.cart.length === 0){ 
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
      return this.cart;
    } else {
      return this.cart;
    } 
  }

  getPrice(articulo:any){
    return articulo.precio * articulo.cantidad;
  }

  addCart(articulo:any){
    let cantidad = 1
    articulo = {...articulo, cantidad}
    this.cart.push(articulo);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(articulo:any){
    this.cart = this.cart.filter(item => item.id !== articulo.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  isAlreadyInCart(articulo:any){
    return this.cart.find(item => item.id === articulo.id);
  }

  decrementsUnits(articulo:any){
    if(articulo.cantidad === 1){
      this.removeFromCart(articulo);
    } else{
      articulo.cantidad--;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  incrementsUnits(articulo:any){
    articulo.cantidad++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  recalculatePrice(){
    let price = 0;
    this.cart.forEach(articulo => {
      price += this.getPrice(articulo);
    })
    return price;
  }
}
