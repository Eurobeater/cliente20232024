import { Component, inject } from '@angular/core';
import { ArticuloCarritoComponent } from './articulo-carrito/articulo-carrito.component';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ArticuloCarritoComponent, CurrencyPipe],
  templateUrl: './carrito.component.html',
  styles: `
  div.cartPrice{
      height: 100px;
      font-size: 1.5em;
      font-weight: bold;
  }`
})
export class CarritoComponent {
  private cartServ = inject(CartService)

  getCarrito() {
    return this.cartServ.getCart()
  }
  getCarritoTotal() {
    return this.cartServ.getCartTotal()
  }
}
