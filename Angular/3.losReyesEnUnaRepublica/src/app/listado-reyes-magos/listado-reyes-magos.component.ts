import { Component } from '@angular/core';
import { ReyMagoComponent } from '../rey-mago/rey-mago.component';
import { BdReyesService } from '../bd-reyes.service';

@Component({
  selector: 'app-listado-reyes-magos',
  standalone: true,
  imports: [ReyMagoComponent],
  templateUrl: './listado-reyes-magos.component.html',
  styleUrl: './listado-reyes-magos.component.css'
})
export class ListadoReyesMagosComponent {
  private reyesMagos:any = []

  constructor(private bd:BdReyesService) {      //bd (anes de los dos puntos) es una propiedad
    this.reyesMagos = bd.getReyesMagos()        //usar la funcion del servicio
  }

  getReyesMagos(){
    return this.reyesMagos
  }

  mostrarArray(){
    alert(this.reyesMagos[0].nombre + this.reyesMagos[0].edad)
  }

}   //fin del CLASS

