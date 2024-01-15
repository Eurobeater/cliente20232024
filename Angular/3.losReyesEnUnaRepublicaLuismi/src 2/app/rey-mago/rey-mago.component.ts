import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rey-mago',
  standalone: true,
  imports: [],
  templateUrl: './rey-mago.component.html',
  styleUrl: './rey-mago.component.css'
})
export class ReyMagoComponent {
  @Input() reyMago:any
  
  incrementarEdad() {
    this.reyMago.edad++
  }
}
