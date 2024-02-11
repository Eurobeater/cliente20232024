import { Component, Input } from '@angular/core';     
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-articulo-carrito',
  templateUrl: './articulo-carrito.component.html',
  styleUrls: ['./articulo-carrito.component.css']
})
export class ArticuloCarritoComponent {
  @Input() articulo:any = {}        //no hay que olvidarse de importar el @Input()

  constructor (private carrito:CarritoService) {}

  decUnidades(articulo:any) {
    this.carrito.decUnidades(articulo)
  }

  addUnidades(articulo:any) {
    this.carrito.addUnidades(articulo)
  }

  delUnidades(articulo:any) {
    this.carrito.delUnidades(articulo)
  }

  //incUnidades() {}

}
