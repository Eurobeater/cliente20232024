import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { ArticulosComponent } from './secciones/articulos/articulos.component';
import { CarritoComponent } from './secciones/carrito/carrito.component';
import { Page404Component } from './page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloTarjetaComponent } from './secciones/articulo-tarjeta/articulo-tarjeta.component';
import { PipeCatPipe } from './pipe-cat.pipe';
import { PipeFabPipe } from './pipe-fab.pipe';
import { ArticuloCarritoComponent } from './secciones/articulo-carrito/articulo-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    ArticulosComponent,
    CarritoComponent,
    Page404Component,
    ArticuloTarjetaComponent,
    PipeCatPipe,
    PipeFabPipe,
    ArticuloCarritoComponent
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
