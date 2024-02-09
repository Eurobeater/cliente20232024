import { Component, Input, inject } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-asset-actions',
  standalone: true,
  imports: [],
  templateUrl: './asset-actions.component.html',
  styles: ``
})
export class AssetActionsComponent {
  @Input() asset:any
  private walletService = inject(WalletService)

  removeFromWallet(asset:any) {
    this.walletService.removeFromWallet(asset)
  }

  moveAssetUp() {
    this.walletService.moveAssetUp(this.asset)
  }
  moveAssetDown() {
    this.walletService.moveAssetDown(this.asset)
  }
}
