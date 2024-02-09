import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private mywallet:Array<any> = []

  constructor() { }

  addToWallet(coin:any) {
    if (coin) {
      let newCoin = { ...coin }
      newCoin.quantity = 0
      this.mywallet.push(newCoin)
    }
  }

  getAssets() {
    return this.mywallet
  }

  getWalletTotalBalance() {
    let total = 0
    this.mywallet.forEach( a => {
      total += a.price * a.quantity
    })
    return total
  }

  isAlreadyInWallet(coin:any) {
    return this.mywallet.find( c => c.id == coin.id )
  }

  moveAssetUp(asset:any) {
    let posicionActual = this.mywallet.findIndex( a => a.id == asset.id )
    if (posicionActual > 0) {
      //intercambiar con el asset de la posición "posicionActual - 1"
      let temporal = this.mywallet[posicionActual]
      this.mywallet[posicionActual] = this.mywallet[posicionActual - 1]
      this.mywallet[posicionActual - 1] = temporal
    }
  }

  moveAssetDown(asset:any) {
    let posicionActual = this.mywallet.findIndex( a => a.id == asset.id )
    if (posicionActual < this.mywallet.length - 1) {
      //intercambiar con el asset de la posición "posicionActual + 1"
      let temporal = this.mywallet[posicionActual]
      this.mywallet[posicionActual] = this.mywallet[posicionActual + 1]
      this.mywallet[posicionActual + 1] = temporal
    }
  }

  removeFromWallet(asset: any) {
    let posicion = this.mywallet.findIndex( a => a.id == asset.id )
    if (posicion > -1) {
      this.mywallet.splice(posicion,1)
    }
  }
}
