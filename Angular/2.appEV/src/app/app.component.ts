import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListadoFabricantesComponent } from './listado-fabricantes/listado-fabricantes.component';
import { ListadoVehiculosComponent } from './listado-vehiculos/listado-vehiculos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListadoFabricantesComponent, ListadoVehiculosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2.appEV';
}
