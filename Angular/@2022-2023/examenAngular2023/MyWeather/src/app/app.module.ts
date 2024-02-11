import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './navbar/secciones/home/home.component';
import { SearchComponent } from './navbar/secciones/search/search.component';
import { ManageComponent } from './navbar/secciones/manage/manage.component';
import { Error404Component } from './navbar/secciones/error404/error404.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BdService } from './bd.service';
import { TarjetaComponent } from './navbar/secciones/search/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavbarComponent,
    PieComponent,
    HomeComponent,
    SearchComponent,
    ManageComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [BdService],
  bootstrap: [AppComponent, EncabezadoComponent, NavbarComponent, PieComponent, HomeComponent, SearchComponent, TarjetaComponent, ManageComponent, Error404Component, BdService]
})
export class AppModule { }
