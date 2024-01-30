import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject} from '@angular/core';
import { CarritoService } from '../../../carrito.service';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CurrencyPipe],                      //para poner las monedas, hay que importar CurrencyPipe
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input() articulo:any

  private carrito = inject(CarritoService)

  anadirCarrito(articulo:any) {
    this.carrito.anadirCarrito(articulo)
  }

}
