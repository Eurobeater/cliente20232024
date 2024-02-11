import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CabeceraComponent,
    PiePaginaComponent,
    BuscadorComponent,
    InicioComponent,
    Error404Component,
    CarritoComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, InicioComponent, BuscadorComponent, CabeceraComponent, NavBarComponent, PiePaginaComponent, CarritoComponent, Error404Component]
})
export class AppModule { }
