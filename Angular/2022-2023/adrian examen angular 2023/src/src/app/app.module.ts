import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './secciones/home/home.component';
import { ManageComponent } from './secciones/manage/manage.component';
import { Page404Component } from './secciones/page404/page404.component';
import { SearchComponent } from './secciones/search/search.component';
import { CiudadTarjetaComponent } from './ciudadTarjeta/ciudadTarjeta.component';
import { CiudadesFavFilterPipe } from './filtros/CiudadesFavFilter.pipe';
import { NPaisFilterPipe } from './filtros/NPaisFilter.pipe';
import { TempFilterPipe } from './filtros/TempFilter.pipe';
import { BdTiempoService } from './bdTiempo.service';



@NgModule({
  declarations: [
    AppComponent,
      EncabezadoComponent,
      NavBarComponent,
      PieComponent,
      HomeComponent,
      ManageComponent,
      SearchComponent,
      Page404Component,
      CiudadTarjetaComponent,
      CiudadesFavFilterPipe,
      NPaisFilterPipe,
      TempFilterPipe
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BdTiempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
