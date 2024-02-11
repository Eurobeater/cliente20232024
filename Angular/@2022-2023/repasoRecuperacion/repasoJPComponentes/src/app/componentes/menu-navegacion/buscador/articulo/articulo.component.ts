import { Component, Input } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  @Input() articulo:any = []    //no hay que olvidarse de importar el @Input()

  constructor (private carrito:CarritoService) {}

  addCarrito(articulo:any) {
    if (this.carrito.isInCarrito(articulo))
      this.carrito.addUnidades(articulo)
    else
      this.carrito.addCarrito(articulo)
  }
}
