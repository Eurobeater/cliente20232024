import { Component, Input, inject } from '@angular/core';
import { CarritoService } from '../../../carrito.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articulo-carrito',
  standalone: true,
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './articulo-carrito.component.html',
  styleUrl: './articulo-carrito.component.css'
})
export class ArticuloCarritoComponent {
@Input() articulo:any

unidades:number = 0
subtotalProducto:number = 0

private carrito = inject(CarritoService)

getArrayCarrito() {
  return this.carrito.getArrayCarrito()
}

quitarCarrito(indice:number) {
  return this.carrito.quitarCarrito(indice)
}

addUnidades() {
  this.unidades++
}

decUnidades() {
  this.unidades--
}

sumaSubtotalProducto() {

}

}
