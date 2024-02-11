import { Component, Input } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  @Input() articulo:any = []


  constructor(private carrito:CarritoService) {}
/*
  addCarrito(articulo:any) {
    if (this.carrito)
  }
*/
}
