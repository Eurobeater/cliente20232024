import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  TotalPrice:number = 0;

  constructor(private bdCart:CartService) { }

  getCart(){
    this.TotalPrice = this.bdCart.recalculatePrice();
    return this.bdCart.getCart();
  }

}
