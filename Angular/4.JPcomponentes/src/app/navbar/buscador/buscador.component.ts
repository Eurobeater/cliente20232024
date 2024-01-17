import { Component, inject } from '@angular/core';
import { BdService } from '../../bd.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

private bd = inject(BdService)

articulosParaMostrar = this.getArticulos()

getArticulos() {
  return this.bd.getArticulos()
}

filtrarArticulosPorNombre(patron:string) {
  this.articulosParaMostrar = this.getArticulos().filter( a => a.nombre.toLowerCase().includes(patron.toLocaleLowerCase()))
}

}
