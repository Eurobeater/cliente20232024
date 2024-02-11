import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './menu-navegacion/inicio/inicio.component';
import { BuscadorComponent } from './menu-navegacion/buscador/buscador.component';
import { CarritoComponent } from './menu-navegacion/carrito/carrito.component';
import { ArticuloCarritoComponent } from './menu-navegacion/carrito/articulo-carrito/articulo-carrito.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { Error404Component } from './menu-navegacion/error404/error404.component';
import { CategoriaPipe } from './categoria.pipe';
import { FabricantePipe } from './fabricante.pipe';
import { NombrePipe } from './nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuNavegacionComponent,
    PieComponent,
    InicioComponent,
    BuscadorComponent,
    CarritoComponent,
    ArticuloCarritoComponent,
    ArticuloComponent,
    Error404Component,
    CategoriaPipe,
    FabricantePipe,
    NombrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppComponent, AppComponent, EncabezadoComponent, MenuNavegacionComponent, PieComponent, InicioComponent, BuscadorComponent, CarritoComponent, ArticuloCarritoComponent, ArticuloComponent, Error404Component],
  bootstrap: [AppComponent, AppComponent, EncabezadoComponent, MenuNavegacionComponent, PieComponent, InicioComponent, BuscadorComponent, CarritoComponent, ArticuloCarritoComponent, ArticuloComponent, Error404Component]
})
export class AppModule { }
