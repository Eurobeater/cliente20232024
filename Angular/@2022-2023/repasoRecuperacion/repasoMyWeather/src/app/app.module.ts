import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PieComponent } from './componentes/pie/pie.component';
import { InicioComponent } from './componentes/navegacion/inicio/inicio.component';
import { BuscarComponent } from './componentes/navegacion/buscar/buscar.component';
import { GestionarFavoritosComponent } from './componentes/navegacion/gestionar-favoritos/gestionar-favoritos.component';
import { TarjetaComponent } from './componentes/navegacion/buscar/tarjeta/tarjeta.component';
import { Error404Component } from './componentes/navegacion/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { CodigoPaisPipe } from './pipes/codigo-pais.pipe';
import { TempPipe } from './pipes/temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavegacionComponent,
    PieComponent,
    InicioComponent,
    BuscarComponent,
    GestionarFavoritosComponent,
    TarjetaComponent,
    Error404Component,
    CodigoPaisPipe,
    TempPipe
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
