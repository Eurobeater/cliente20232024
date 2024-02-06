import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private marketData = [
    { id: 1, name: "Bitcoin", symbol:"BTC", img: "assets/img/wwlogo.png", price: 42000},
    { id: 2, name: "Ethereum", symbol:"ETC", img: "assets/img/wwlogo.png", price: 1},
    { id: 3, name: "Solana", symbol:"SOL", img: "assets/img/wwlogo.png", price: 2},
    { id: 4, name: "Cardano", symbol:"ADA", img: "assets/img/wwlogo.png", price: 0.52},
    { id: 5, name: "Avalanche", symbol:"AVAX", img: "assets/img/wwlogo.png", price: 6.52},
    { id: 6, name: "Dogecoin", symbol:"DOGE", img: "assets/img/wwlogo.png", price: 0.60},
  ]

  //private urlMarketData = "https://api.coinpaprika.com/v1/tickers"

  //constructor(private http:HttpClient) {                              //en app.config.ts, donde pone [providers] escribir provideHttpClient()
    //http.get(this.urlMarketData + "/categorias").subscribe( json => {
      //this.marketData = json
    //})
  //}

  getMarketData() {
    return this.marketData
  }

  //constructor() {}

}
