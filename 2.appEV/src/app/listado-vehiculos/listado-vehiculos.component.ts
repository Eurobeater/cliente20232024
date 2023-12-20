import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FabricanteComponent } from '../fabricante/fabricante.component';

@Component({
  selector: 'app-listado-vehiculos',
  standalone: true,
  imports: [FabricanteComponent],
  templateUrl: './listado-vehiculos.component.html',
  styleUrl: './listado-vehiculos.component.css'
})
export class ListadoVehiculosComponent {

  private vehiculos:Array<any> = [
    {
      id:"1",
      text:null,
      nombre:"A3 Sportback e-tron",
      imagen:"assets/img/Audi_A3_Sportback_e-tron.jpg",
      precio:"38750",
      fabricante:"1",
      tecnologia:"3"
    },
    {id:"2",text:null,nombre:"Q7 e-tron quattro",imagen:"assets/img/Audi_Q7_e-tron_quattro.jpg",precio:"83970",fabricante:"1",tecnologia:"3"},
    {id:"3",text:null,nombre:"i3",imagen:"assets/img/BMW-i3-60Ah.jpg",precio:"35500",fabricante:"2",tecnologia:"1"},
    {id:"4",text:null,nombre:"Serie 2 iPerformance",imagen:"assets/img/BMW_225xe_iPerformance.jpg",precio:"39500",fabricante:"2",tecnologia:"3"}
  ]

  getVehiculos() {
    return this.vehiculos
  }
}
