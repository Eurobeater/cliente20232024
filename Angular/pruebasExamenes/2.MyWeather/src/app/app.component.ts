import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { BuscarComponent } from './navbar/buscar/buscar.component';
import { FavsComponent } from './navbar/favs/favs.component';
import { Error404Component } from './navbar/error404/error404.component';
import { TarjetaComponent } from './navbar/favs/tarjeta/tarjeta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EncabezadoComponent, NavbarComponent, InicioComponent, BuscarComponent, FavsComponent, TarjetaComponent, Error404Component, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2.MyWeather';
}
