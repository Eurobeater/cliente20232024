import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private myWallet:Array<any> = []

  constructor() { }

  addToWallet(coin:any) {
    if (coin != null) {
      let newCoin = {... coin}               //se llama 'spread operator'. coger uno por uno (iteración) todos los atributos de coin y construir un array. sinonimo de { id: 1, name: "A", symbol: ""}
      newCoin.quantity = 0                  //añadir un atributo al array llamado quantity
      this.myWallet.push(newCoin)
    }
  }

  removeFromWallet(asset:any) {
    let posicion = this.myWallet.findIndex(a => a.id == asset.id)
    this.myWallet.splice(posicion, 1)
  }

  getAssets() {
    return this.myWallet
  }

  isAlreadyInWallet(coin:any) {
    return this.myWallet.find(c => c.id == coin.id)
  }

}
