import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'buscador', component:BuscadorComponent},
  {path: 'carrito', component:CarritoComponent},
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
