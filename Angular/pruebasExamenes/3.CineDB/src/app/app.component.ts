import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { PieComponent } from './pie/pie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritosComponent } from './navbar/favoritos/favoritos.component';
import { FavoritoComponent } from './navbar/favoritos/favorito/favorito.component';
import { BuscadorComponent } from './navbar/buscador/buscador.component';
import { AgradecimientosComponent } from './navbar/agradecimientos/agradecimientos.component';
import { Error404Component } from './navbar/error404/error404.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EncabezadoComponent, PieComponent, NavbarComponent, InicioComponent, FavoritosComponent, FavoritoComponent, BuscadorComponent, AgradecimientosComponent, Error404Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3.CineDB';
}
