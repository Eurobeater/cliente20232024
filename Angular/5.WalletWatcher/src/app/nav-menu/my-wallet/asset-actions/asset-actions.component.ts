import { Component, Input } from '@angular/core';
import { WalletService } from '../../../wallet.service';

@Component({
  selector: 'app-asset-actions',
  standalone: true,
  imports: [],
  templateUrl: './asset-actions.component.html',
  styleUrl: './asset-actions.component.css'
})
export class AssetActionsComponent {
@Input() asset:any
  constructor(private walletService:WalletService){}

  moveAssetUp(asset:any) {
    return this.walletService.moveAssetUp(asset)
  }

  moveAssetDown(asset:any) {
    return this.walletService.moveAssetDown(asset)
  }

  removeFromWallet(asset:any) {
    return this.walletService.removeFromWallet(asset)
  }
}
