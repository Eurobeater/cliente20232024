import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { CarritoService } from '../../carrito.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {

  constructor (private bd:BdService) {}

  getArticulos() {
    return this.bd.getArticulos()
  }
}
