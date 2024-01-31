import { Component } from '@angular/core';
import { ArticulosComponent } from './articulos/articulos.component';

@Component({
  selector: 'app-listar-articulos',
  standalone: true,
  imports: [ArticulosComponent],
  templateUrl: './listar-articulos.component.html',
  styleUrl: './listar-articulos.component.css'
})
export class ListarArticulosComponent {

}
