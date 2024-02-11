import { Component, Input } from '@angular/core';
import { CarritoService } from 'src/carrito.service';

@Component({
  selector: 'app-articulo-carrito',
  templateUrl: './articulo-carrito.component.html',
  styleUrls: ['./articulo-carrito.component.css']
})
export class ArticuloCarritoComponent {
  @Input() articuloCarrito:any = [];
  static precio: any;

  constructor(private bdCart:CarritoService) { }

  removeFromCart(articulo:any){
    this.bdCart.removeFromCarrito(articulo);
  }

  incrementsUnits(articulo:any){
    this.bdCart.incrementsUnits(articulo);
  }

  decrementsUnits(articulo:any){
    this.bdCart.decrementsUnits(articulo);
  }

  getPrice(articulo:any){
    return this.bdCart.getPrecio(articulo);
  }
}
