import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListarArticulosComponent } from './listar-articulos/listar-articulos.component';
import { ArticulosComponent } from './listar-articulos/articulos/articulos.component';
import { CarritoComponent } from './listar-articulos/carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListarArticulosComponent, ArticulosComponent, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrito';
}
