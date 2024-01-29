import { Component, Input, inject } from '@angular/core';
import { CarritoService } from '../../../carrito.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-articulo-carrito',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './articulo-carrito.component.html',
  styleUrl: './articulo-carrito.component.css'
})
export class ArticuloCarritoComponent {
@Input() articulo:any

private carrito = inject(CarritoService)

getArrayCarrito() {
  return this.carrito.getArrayCarrito()
}

quitarCarrito(indice:number) {
  return this.carrito.quitarCarrito(indice)
}

}
