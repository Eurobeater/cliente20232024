import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { Pagina404Component } from './pagina404/pagina404.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    title: 'Inicio',
  },
  {
    path: 'buscador',
    component: BuscadorComponent,
    title: 'Buscador',
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    title: 'Carrito',
  },
  {
    path: '**',
    component: Pagina404Component,
    title: 'Error 404',
  }
];
