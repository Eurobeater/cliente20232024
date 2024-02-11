import { Component } from '@angular/core';
import { BdService } from '../bd.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

getArticulos() {
  return this.servicioBd.getArticulos()
}

constructor(private servicioBd:BdService) {}
}
