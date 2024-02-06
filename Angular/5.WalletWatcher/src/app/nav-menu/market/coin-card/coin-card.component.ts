import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WalletService } from '../../../wallet.service';

@Component({
  selector: 'app-coin-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './coin-card.component.html',
  styleUrl: './coin-card.component.css'
})
export class CoinCardComponent {
  @Input() coin:any

  constructor(private walletService:WalletService) {}

  addToWallet(coin:any) {
    return this.walletService.addToWallet(coin)
  }

  isAlreadyInWallet(coin:any) {
    return this.walletService.isAlreadyInWallet(coin)
  }

}
