import { Component } from '@angular/core';
import { CarritoServiceService } from 'src/app/carrito-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private cart:CarritoServiceService) {}

  getCart() {
    return this.cart.getCart()
  }
}
