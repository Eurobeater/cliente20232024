import { Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { CancionesComponent } from './navbar/canciones/canciones.component';
import { PlaylistsComponent } from './navbar/playlists/playlists.component';

export const routes: Routes = [
  { path: "", component: InicioComponent, title: "Inicio" },
  { path: "inicio", component: InicioComponent, title: "Inicio" },
  { path: "canciones", component: CancionesComponent, title: "Canciones" },
  { path: "playlists", component: PlaylistsComponent, title: "Playlists" },
];
