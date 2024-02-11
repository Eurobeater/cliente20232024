import { Component, Input } from '@angular/core';
import { CarritoServiceService } from 'src/app/carrito-service.service';

@Component({
  selector: 'app-articulo-tarjeta',
  templateUrl: './articulo-tarjeta.component.html',
  styleUrls: ['./articulo-tarjeta.component.css']
})
export class ArticuloTarjetaComponent {
  @Input() articulo:any = []

  constructor(private cart:CarritoServiceService) {}

  addToCart(articulo:any) {
    if ( this.cart.isInCart(articulo) )
      this.cart.addUnits(articulo)
    else
      this.cart.addToCart(articulo)
  }
}
