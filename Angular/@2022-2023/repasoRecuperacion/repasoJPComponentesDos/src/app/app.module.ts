import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { ArticuloComponent } from './componentes/buscador/articulo/articulo.component';
import { CarritoComponent } from './componentes/buscador/carrito/carrito.component';
import { ArticuloCarritoComponent } from './componentes/buscador/carrito/articulo-carrito/articulo-carrito.component';
import { NomPipe } from './pipes/nom.pipe';
import { CatPipe } from './pipes/cat.pipe';
import { FabPipe } from './pipes/fab.pipe';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    BuscadorComponent,
    ArticuloComponent,
    CarritoComponent,
    ArticuloCarritoComponent,
    NomPipe,
    CatPipe,
    FabPipe,
    NavBarComponent,
    Error404Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
