import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './articulo.component.html',
  styles: ``
})
export class ArticuloComponent {
  @Input() articulo:any

  cartServ = inject(CartService)

  addToCart() {
    this.cartServ.addToCart(this.articulo)
  }

}
