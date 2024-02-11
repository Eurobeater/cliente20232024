import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/shared/encabezado/encabezado.component';
import { MenuNavegacionComponent } from './components/shared/menu-navegacion/menu-navegacion.component';
import { PieComponent } from './components/shared/pie/pie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListadoFavoritosComponent } from './components/listado-favoritos/listado-favoritos.component';
import { BuscadorConsultasComponent } from './components/buscador-consultas/buscador-consultas.component';
import { AgradecimientosComponent } from './components/agradecimientos/agradecimientos.component';
import { FavoritoComponent } from './components/listado-favoritos/favorito/favorito.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuNavegacionComponent,
    PieComponent,
    InicioComponent,
    ListadoFavoritosComponent,
    BuscadorConsultasComponent,
    AgradecimientosComponent,
    FavoritoComponent,
    DetallesComponent,
    Pagina404Component
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
