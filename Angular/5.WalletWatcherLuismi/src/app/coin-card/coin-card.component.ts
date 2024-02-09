import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-coin-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './coin-card.component.html',
  styles: ``
})
export class CoinCardComponent {
  @Input() coin:any

  constructor(private mywallet:WalletService) {}

  addToWallet(coin:any) {
    this.mywallet.addToWallet(coin)
  }

  isAlreadyInWallet(coin:any) {
    return this.mywallet.isAlreadyInWallet(coin)
  }
}
