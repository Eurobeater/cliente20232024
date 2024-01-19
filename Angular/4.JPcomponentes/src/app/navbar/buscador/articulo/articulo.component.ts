import { CurrencyPipe } from '@angular/common';
import { Component, Input} from '@angular/core';
import { BdService } from '../../../bd.service';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CurrencyPipe],                      //para poner las monedas, hay que importar CurrencyPipe
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input() articulo:any
}
