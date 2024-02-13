import { Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { BuscarComponent } from './navbar/buscar/buscar.component';
import { FavsComponent } from './navbar/favs/favs.component';
import { Error404Component } from './navbar/error404/error404.component';

export const routes: Routes = [
  { path: "", component: InicioComponent, title: "Inicio" },
  { path: "buscar", component: BuscarComponent, title: "Buscar" },
  { path: "favs", component: FavsComponent, title: "Favs" },
  { path: "**", component: Error404Component, title: "Error404" }
];
