import { Component } from '@angular/core';
import { BdService } from 'src/app/servicios/bd.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  filtroCat:number = 0
  filtroFab:number = 0
  filtroNom:string = ""

  
  constructor(private bd:BdService) {}

  getCategorias():Array<any> {
    return this.bd.getCategorias()
  }

  getFabricantes():Array<any> {
    return this.bd.getFabricantes()
  }

  getArticulos():Array<any> {
    return this.bd.getArticulos()
  }

}
