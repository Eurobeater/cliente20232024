import { Routes } from '@angular/router';
import { MarketComponent } from './nav-menu/market/market.component';
import { CreditsComponent } from './nav-menu/credits/credits.component';
import { Page404Component } from './nav-menu/page404/page404.component';
import { MyWalletComponent } from './nav-menu/my-wallet/my-wallet.component';

export const routes: Routes = [
  { path: "market", component: MarketComponent, title: "Market" },
  { path: "mywallet", component: MyWalletComponent, title: "My Wallet" },
  { path: "credits", component: CreditsComponent, title: "Credits" },
  { path: "", redirectTo: "market", pathMatch: "full" },
  // {path: "", component:MarketComponent, title: "market"},
  { path: "**", component: Page404Component, title: "Error404" }
];
