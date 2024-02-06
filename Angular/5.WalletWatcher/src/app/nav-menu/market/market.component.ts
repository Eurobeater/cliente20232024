import { Component } from '@angular/core';
import { CoinCardComponent } from './coin-card/coin-card.component';
import { MarketDataService } from '../../market-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CoinCardComponent, FormsModule],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {

constructor(private marketService:MarketDataService){}

  patron = ""

  getMarketData() {
    return this.marketService.getMarketData()
  }
}
