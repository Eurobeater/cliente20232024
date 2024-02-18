import { Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { CancionesComponent } from './navbar/canciones/canciones.component';
import { PlaylistsComponent } from './navbar/playlists/playlists.component';
import { Error404Component } from './navbar/error404/error404.component';

export const routes: Routes = [
  { path: "", component:InicioComponent, title: "Inicio" },
  { path: "inicio", component:InicioComponent, title: "Inicio" },
  { path: "canciones", component:CancionesComponent, title: "Canciones" },
  { path: "playlists", component:PlaylistsComponent, title: "Playlists" },
  { path: "**", component:Error404Component, title: "Error404" },

];
