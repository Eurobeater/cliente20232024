import { Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { BuscadorComponent } from './navbar/buscador/buscador.component';
import { CarritoComponent } from './navbar/carrito/carrito.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Inicio'},
  { path: 'buscador', component: BuscadorComponent, title: 'Buscador' },
  { path: 'carrito', component: CarritoComponent, title: 'Carrito' }
];
