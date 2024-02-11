import { Component,Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-articulo-carrito',
  templateUrl: './articulo-carrito.component.html',
  styleUrls: ['./articulo-carrito.component.css']
})
export class ArticuloCarritoComponent {

  @Input() articuloCarrito:any = [];

  constructor(private bdCart:CartService) { }

  removeFromCart(articulo:any){
    this.bdCart.removeFromCart(articulo);
  }

  incrementsUnits(articulo:any){
    this.bdCart.incrementsUnits(articulo);
  }

  decrementsUnits(articulo:any){
    this.bdCart.decrementsUnits(articulo);
  }

  getPrice(articulo:any){
    return this.bdCart.getPrice(articulo);
  }
  

}
