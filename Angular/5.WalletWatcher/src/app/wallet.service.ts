import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private myWallet:Array<any> = []

  constructor() {
    this.myWallet = JSON.parse(localStorage.getItem("wallet") || "[]")
  }

  addToWallet(coin:any) {
    if (coin != null) {
      let newCoin = {... coin}                //se llama 'spread operator'. coger uno por uno (iteración) todos los atributos de coin y construir un array. sinonimo de { id: 1, name: "A", symbol: ""}
      newCoin.quantity = 1                    //añadir un atributo al array llamado quantity. por defecto es 1
      this.myWallet.push(newCoin)
    }
    this.saveToLocalStorage()
  }

  removeFromWallet(asset:any) {
    let posicion = this.myWallet.findIndex(a => a.id == asset.id)
    this.myWallet.splice(posicion, 1)
  }

  moveAssetUp(asset:any) {
    let posicionActual = this.myWallet.findIndex(a => a.id == asset.id)
    if (posicionActual > 0) {
      //intercambiar con el asset de la posicion 'posicionActual - 1
      let temporal = this.myWallet[posicionActual]
      this.myWallet[posicionActual] = this.myWallet[posicionActual - 1]
      this.myWallet[posicionActual - 1] = temporal
    }
  }

  moveAssetDown(asset:any) {
    let posicionActual = this.myWallet.findIndex(a => a.id == asset.id)
    if (posicionActual < this.myWallet.length - 1) {
      //intercambiar con el asset de la posicion 'posicionActual - 1
      let temporal = this.myWallet[posicionActual]
      this.myWallet[posicionActual] = this.myWallet[posicionActual + 1]
      this.myWallet[posicionActual + 1] = temporal
    }
  }

  getAssets() {
    return this.myWallet
  }

  totalWalletBalance() {
    let total = 0
    this.myWallet.forEach( a => {
      total += a.price * a.quantity
    })
    return total
  }

  isAlreadyInWallet(coin:any) {
    return this.myWallet.find(c => c.id == coin.id)
  }

  saveToLocalStorage() {
    localStorage.setItem("wallet", JSON.stringify(this.myWallet) )
  }
}
