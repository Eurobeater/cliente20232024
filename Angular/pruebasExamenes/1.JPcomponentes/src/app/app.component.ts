import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticuloCarritoComponent } from './navbar/carrito/articulo-carrito/articulo-carrito.component';
import { CarritoComponent } from './navbar/carrito/carrito.component';
import { BuscadorComponent } from './navbar/buscador/buscador.component';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { Error404Component } from './navbar/error404/error404.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EncabezadoComponent, PieComponent, NavbarComponent, InicioComponent, BuscadorComponent, CarritoComponent, Error404Component, ArticuloCarritoComponent, ArticuloCarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1.JPcomponentes';
}
