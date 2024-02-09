import { Component } from '@angular/core';
import { WalletService } from '../../wallet.service';
import { CurrencyPipe } from '@angular/common';
import { AssetQuantityComponent } from './asset-quantity/asset-quantity.component';
import { AssetActionsComponent } from './asset-actions/asset-actions.component';

@Component({
  selector: 'app-my-wallet',
  standalone: true,
  imports: [CurrencyPipe, AssetQuantityComponent, AssetActionsComponent],
  templateUrl: './my-wallet.component.html',
  styleUrl: './my-wallet.component.css'
})
export class MyWalletComponent {

  constructor (private walletService:WalletService){}

  getAssetsFromWallet() {
    return this.walletService.getAssets()
  }

  totalWalletBalance() {
    return this.walletService.totalWalletBalance()
  }

}
