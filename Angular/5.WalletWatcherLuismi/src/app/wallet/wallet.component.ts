import { Component, inject } from '@angular/core';
import { WalletService } from '../wallet.service';
import { CurrencyPipe } from '@angular/common';
import { AssetQuantityComponent } from '../asset-quantity/asset-quantity.component';
import { AssetActionsComponent } from '../asset-actions/asset-actions.component';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CurrencyPipe, AssetQuantityComponent, AssetActionsComponent],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {

  private walletService = inject(WalletService)

  getAssets() {
    return this.walletService.getAssets()
  }

  getWalletTotalBalance() {
    return this.walletService.getWalletTotalBalance()
  }
}
