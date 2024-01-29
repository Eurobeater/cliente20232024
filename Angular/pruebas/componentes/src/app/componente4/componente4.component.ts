import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente4',
  standalone: true,
  imports: [],
  templateUrl: './componente4.component.html',
  styleUrl: './componente4.component.css'
})
export class Componente4Component {
@Input() persona:any                    //con el @Input() se hereda la propiedad 'persona' (la iteración de arrayObjetos() del Componente 3). se asigna el nombre de la propiedad y su tipo (any porque es un Array de objetos)
}
