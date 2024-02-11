import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { MenuNavegacionComponent } from './componentes/menu-navegacion/menu-navegacion.component';
import { InicioComponent } from './componentes/menu-navegacion/inicio/inicio.component';
import { BuscadorComponent } from './componentes/menu-navegacion/buscador/buscador.component';
import { ArticuloComponent } from './componentes/menu-navegacion/buscador/articulo/articulo.component';
import { CarritoComponent } from './componentes/menu-navegacion/carrito/carrito.component';
import { ArticuloCarritoComponent } from './componentes/menu-navegacion/carrito/articulo-carrito/articulo-carrito.component';
import { Error404Component } from './componentes/menu-navegacion/error404/error404.component';
import { PipeCatPipe } from './pipes/pipe-cat.pipe';
import { PipeFabPipe } from './pipes/pipe-fab.pipe';
import { PipeNomPipe } from './pipes/pipe-nom.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    MenuNavegacionComponent,
    InicioComponent,
    BuscadorComponent,
    ArticuloComponent,
    CarritoComponent,
    ArticuloCarritoComponent,
    Error404Component,
    PipeCatPipe,
    PipeFabPipe,
    PipeNomPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
