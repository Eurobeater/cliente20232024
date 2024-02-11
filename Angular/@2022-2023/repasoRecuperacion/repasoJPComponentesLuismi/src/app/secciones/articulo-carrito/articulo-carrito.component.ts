import { Component, Input } from '@angular/core';
import { CarritoServiceService } from 'src/app/carrito-service.service';

@Component({
  selector: 'app-articulo-carrito',
  templateUrl: './articulo-carrito.component.html',
  styleUrls: ['./articulo-carrito.component.css']
})
export class ArticuloCarritoComponent {
  @Input() articulo:any = {}

  constructor(private cart:CarritoServiceService) {}

  decUnits(articulo:any) {
    this.cart.decUnits(articulo)
  }

  incUnits() {}
}
