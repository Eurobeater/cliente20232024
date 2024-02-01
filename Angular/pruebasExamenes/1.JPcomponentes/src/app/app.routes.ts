import { Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { BuscadorComponent } from './navbar/buscador/buscador.component';
import { CarritoComponent } from './navbar/carrito/carrito.component';
import { Error404Component } from './navbar/error404/error404.component';

export const routes: Routes = [
  { path: '', component:InicioComponent, title: 'Inicio' },
  { path: 'inicio', component:InicioComponent, title: 'Inicio' },
  { path: 'buscador', component:BuscadorComponent, title: 'Buscador' },
  { path: 'carrito', component:CarritoComponent, title: 'Carrito' },
  { path: '**', component: Error404Component, title: 'Error 404',
  }

];
