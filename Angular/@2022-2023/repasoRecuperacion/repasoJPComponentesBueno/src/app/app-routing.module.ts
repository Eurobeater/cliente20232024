import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { ArticulosComponent } from './secciones/articulos/articulos.component';
import { CarritoComponent } from './secciones/carrito/carrito.component';
import { InicioComponent } from './secciones/inicio/inicio.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "articulos", component: ArticulosComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full"},
  { path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
