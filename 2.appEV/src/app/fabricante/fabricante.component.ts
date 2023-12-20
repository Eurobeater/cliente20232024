import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fabricante',
  standalone: true,
  imports: [],
  templateUrl: './fabricante.component.html',
  styleUrl: './fabricante.component.css'
})
export class FabricanteComponent {
  @Input() fabricante:any                   //importar en la linea de arriba donde pone imports, no en imports[]
}
