import { Component } from '@angular/core';
import { FabricanteComponent } from '../fabricante/fabricante.component';

@Component({
  selector: 'app-listado-fabricantes',
  standalone: true,
  imports: [FabricanteComponent],
  templateUrl: './listado-fabricantes.component.html',
  styleUrl: './listado-fabricantes.component.css'
})
export class ListadoFabricantesComponent {

  private fabricantes:Array<any> = [
    {id:"1",text:"Audi",imagen:"assets/img/audi.jpg"},
    {id:"2",text:"BMW",imagen:"assets/img/bmw.jpg"},
    {id:"3",text:"Citroën",imagen:"assets/img/citroen.jpg"},
    {id:"4",text:"Ford",imagen:"assets/img/ford.jpg"},
    {id:"5",text:"Honda",imagen:"assets/img/honda.jpg"},
    {id:"6",text:"Hyundai",imagen:"assets/img/hyundai.jpg"},
    {id:"7",text:"Jaguar",imagen:"assets/img/jaguar.jpg"},
    {id:"8",text:"Kia",imagen:"assets/img/kia.jpg"},
    {id:"9",text:"Lexus",imagen:"assets/img/lexus.jpg"},
    {id:"10",text:"Mercedes",imagen:"assets/img/mercedes.jpg"},
    {id:"11",text:"Mitsubishi",imagen:"assets/img/mitsubishi.jpg"},
    {id:"12",text:"Nissan",imagen:"assets/img/nissan.jpg"},
    {id:"13",text:"Peugeot",imagen:"assets/img/peugeot.jpg"},
    {id:"14",text:"Porsche",imagen:"assets/img/porsche.jpg"},
    {id:"15",text:"Renault",imagen:"assets/img/renault.jpg"},
    {id:"16",text:"Suzuki",imagen:"assets/img/suzuki.jpg"},
    {id:"17",text:"Tesla",imagen:"assets/img/tesla.jpg"},
    {id:"18",text:"Toyota",imagen:"assets/img/toyota.jpg"},
    {id:"19",text:"Volvo",imagen:"assets/img/volvo.jpg"},
    {id:"20",text:"Volkswagen",imagen:"assets/img/volkswagen.jpg"}
  ]

  getFabricantes() {
    return this.fabricantes
  }
}
