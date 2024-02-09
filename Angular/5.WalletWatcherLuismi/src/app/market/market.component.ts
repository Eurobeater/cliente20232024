import { Component, inject } from '@angular/core';
import { MarketDataService } from '../market-data.service';
import { CoinCardComponent } from '../coin-card/coin-card.component';
import { FilterByStringPipe } from '../filter-by-string.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CoinCardComponent, FilterByStringPipe, FormsModule],
  templateUrl: './market.component.html',
  styles: ``
})
export class MarketComponent {
  patron = ""
  private marketService = inject(MarketDataService)

  //constructor(private marketDB:MarketDataService) {}

  getMarketData() {
    return this.marketService.getMarketData()
  }

}
