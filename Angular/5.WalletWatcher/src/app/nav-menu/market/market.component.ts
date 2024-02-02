import { Component } from '@angular/core';
import { CoinCardComponent } from './coin-card/coin-card.component';
import { MarketDataService } from '../../market-data.service';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CoinCardComponent],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {

constructor(private marketService:MarketDataService){}

  getMarketData() {
    return this.marketService.getMarketData()
  }
}
