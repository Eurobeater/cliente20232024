import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {

@Input() empleadoDeLista:Empleado

arrayCaracteristicas = [''];
indice:number = 0;

agregarCaracteristica(nuevaCaracteristica:string) {
  this.arrayCaracteristicas.push(nuevaCaracteristica)
}


}
