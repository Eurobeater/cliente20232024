import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/shared/encabezado/encabezado.component';
import { MenuNavegacionComponent } from './components/shared/menu-navegacion/menu-navegacion.component';
import { PieComponent } from './components/shared/pie/pie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArticuloComponent } from './components/buscador/articulo/articulo.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ArticuloCarritoComponent } from './components/carrito/articulo-carrito/articulo-carrito.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NombrePipe } from './pipes/nombre.pipe';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { FabricantePipe } from './pipes/fabricante.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuNavegacionComponent,
    PieComponent,
    InicioComponent,
    BuscadorComponent,
    ArticuloComponent,
    CarritoComponent,
    ArticuloCarritoComponent,
    Pagina404Component,
    NombrePipe,
    CategoriaPipe,
    FabricantePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
