import { Component, Input, inject } from '@angular/core';
import { CarritoService } from '../../../carrito.service';

@Component({
  selector: 'app-articulo-carrito',
  standalone: true,
  imports: [],
  templateUrl: './articulo-carrito.component.html',
  styleUrl: './articulo-carrito.component.css'
})
export class ArticuloCarritoComponent {
@Input() articulo:any

private carrito = inject(CarritoService)

}
