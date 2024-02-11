import { Component } from '@angular/core';
import { BaseDatosArticulosService } from 'src/app/services/base-datos-articulos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private artbd:BaseDatosArticulosService) { }

  getArticulos(){
    return this.artbd.getArticulos().slice(-3);
  }
  
}
