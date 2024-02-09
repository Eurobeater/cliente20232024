import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PieComponent } from './pie/pie.component';
import { CreditsComponent } from './nav-menu/credits/credits.component';
import { MarketComponent } from './nav-menu/market/market.component';
import { MyWalletComponent } from './nav-menu/my-wallet/my-wallet.component';
import { Page404Component } from './nav-menu/page404/page404.component';
import { CoinCardComponent } from './nav-menu/market/coin-card/coin-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EncabezadoComponent, PieComponent, NavMenuComponent, CreditsComponent, MarketComponent, CoinCardComponent, MyWalletComponent, Page404Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '5.WalletWatcher';
}
