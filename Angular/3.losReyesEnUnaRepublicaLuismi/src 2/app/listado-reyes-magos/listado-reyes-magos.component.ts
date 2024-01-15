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
  //private reyesMagos:any = []

  constructor(private bd:BdReyesService) {
    //this.reyesMagos = bd.getReyesMagos()
  }

  getReyesMagos() {
    return this.bd.getReyesMagos()
  }

  mostrarArray() {
    let rey = this.bd.getReyMago(0)
    if (rey) alert(rey.nombre + rey.edad)
  }
} //fin del CLASS
