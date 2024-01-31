import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-articulo-carrito',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './articulo-carrito.component.html',
  styles: `img.img-thumbnail {
    width:100px;
  }
  input.form-control {
      display: inline;
      margin: 2px;
      width: 20%;
  }`
})
export class ArticuloCarritoComponent {
  @Input() art:any
  private carServ = inject(CartService)

  decrUnid() { this.carServ.decrUnits(this.art) }
  incrUnid() { this.carServ.incrUnits(this.art) }
  borrarArticulo() { this.carServ.delArt(this.art) }
}
