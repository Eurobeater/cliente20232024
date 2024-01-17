import { Component } from '@angular/core';
import { BdService } from '../../bd.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  private todosArticulos:any = []

  constructor(private bd:BdService) {              //bd (antes de los dos puntos) es una propiedad
    this.todosArticulos = bd.getArticulos()        //usar la funcion del servicio
  }

  getTodosProductos() {
    return this.todosArticulos
  }

  getArticulosRecientes() {                         //se crea una funcion en el componente inicio para llamarla en el template.
    return this.bd.getArticulosMasRecientes(3)      //devuelve la funcion que se llama en el servicio, para devolver los 3 artículos más recientes
  }
}
