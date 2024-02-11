import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/navegacion/buscar/buscar.component';
import { Error404Component } from './componentes/navegacion/error404/error404.component';
import { GestionarFavoritosComponent } from './componentes/navegacion/gestionar-favoritos/gestionar-favoritos.component';
import { InicioComponent } from './componentes/navegacion/inicio/inicio.component';

const routes: Routes = [
  { path: "home", component: InicioComponent },
  { path: "search", component: BuscarComponent },
  { path: "manage", component: GestionarFavoritosComponent },
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
