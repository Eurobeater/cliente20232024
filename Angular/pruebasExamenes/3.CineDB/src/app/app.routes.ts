import { Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { FavoritosComponent } from './navbar/favoritos/favoritos.component';
import { BuscadorComponent } from './navbar/buscador/buscador.component';
import { AgradecimientosComponent } from './navbar/agradecimientos/agradecimientos.component';
import { DetallesComponent } from './navbar/favoritos/favorito/detalles/detalles.component';
import { Error404Component } from './navbar/error404/error404.component';

export const routes: Routes = [
  { path: "", component:InicioComponent, title: "Inicio" },
  { path: "home", component:InicioComponent, title: "Inicio" },
  { path: "favs", component:FavoritosComponent, title: "Favoritos" },
  { path: "query", component:BuscadorComponent, title: "Buscador" },
  { path: "thank", component:AgradecimientosComponent, title: "Agradecimientos" },
  { path: "detail", component:DetallesComponent, title: "Detalles" },
  { path: "**", component:Error404Component, title: "Error404" }
];
