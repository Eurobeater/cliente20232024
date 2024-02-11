import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  @Input() articulo:any = [];

  constructor(private cartS:CartService) { }

  addCart(articulo:any){
    if(this.cartS.isAlreadyInCart(articulo)){
      alert('El articulo ya esta en el carrito');
    }
      else{
        this.cartS.addCart(articulo);
      }
  }
}
