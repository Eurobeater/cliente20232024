import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { CarritoComponent } from './componentes/buscador/carrito/carrito.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: "inicio", component:InicioComponent },
  { path: "buscador", component: BuscadorComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full"},
  { path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
