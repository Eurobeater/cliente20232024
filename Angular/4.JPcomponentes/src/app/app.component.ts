import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { BuscadorComponent } from './navbar/buscador/buscador.component';
import { ArticuloComponent } from './navbar/buscador/articulo/articulo.component';
import { CarritoComponent } from './navbar/carrito/carrito.component';
import { ArticuloCarritoComponent } from './navbar/carrito/articulo-carrito/articulo-carrito.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EncabezadoComponent, PieComponent, NavbarComponent, InicioComponent, BuscadorComponent, ArticuloComponent, CarritoComponent, ArticuloCarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4.JPcomponentes';
}
