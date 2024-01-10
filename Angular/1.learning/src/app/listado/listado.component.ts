import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  private luchadores = [
    {name: "Hulk Hogan", death: false},
    {name: "Mr Perfect", death: true},
    {name: "El enterrador", death: false},
    {name: "Jake The Snake Roberts", death: true}
  ]

  getLuchadores() {
    return this.luchadores
  }
}
