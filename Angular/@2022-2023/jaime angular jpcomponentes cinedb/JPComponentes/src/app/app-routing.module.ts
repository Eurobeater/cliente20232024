import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'search', component: BuscadorComponent },
  { path: 'cart', component: CarritoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
