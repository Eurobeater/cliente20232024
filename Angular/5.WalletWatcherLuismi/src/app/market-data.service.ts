import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private marketData = [
    { id: 1, name: "Bitcoin", symbol: "BTC", img: "assets/img/wwlogo.png", price: 42000},
    { id: 2, name: "Ethereum", symbol: "ETH", img: "assets/img/wwlogo.png", price: 2300},
    { id: 3, name: "Solana", symbol: "SOL", img: "assets/img/wwlogo.png", price: 90},
    { id: 4, name: "Cardano", symbol: "ADA", img: "assets/img/wwlogo.png", price: 0.52},
    { id: 5, name: "Avalanche", symbol: "AVAX", img: "assets/img/wwlogo.png", price: 6.52},
    { id: 6, name: "Dogecoin", symbol: "DOGE", img: "assets/img/wwlogo.png", price: 0.6}
  ]

  constructor() { }

  getMarketData() {
    return this.marketData
  }
}
