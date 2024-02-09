import { Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { Page404Component } from './page404/page404.component';
import { WalletComponent } from './wallet/wallet.component';
import { CreditsComponent } from './credits/credits.component';

export const routes: Routes = [
  { path: "market", component: MarketComponent, title: "Market"},
  { path: "wallet", component: WalletComponent, title: "Portfolio"},
  { path: "credits", component: CreditsComponent, title: "Market"},
  { path: '', redirectTo: 'market', pathMatch: 'full' },
  { path: "**", component: Page404Component, title: "Error 404"}
];
