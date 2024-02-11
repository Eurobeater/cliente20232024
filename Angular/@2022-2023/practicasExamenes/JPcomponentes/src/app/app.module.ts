import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseDatosArticulosService } from './base-datos-articulos.service';
import { CartService } from './cart.service';
import { ConexionRemotaService } from './conexion-remota.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuNavegacionComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConexionRemotaService, BaseDatosArticulosService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
