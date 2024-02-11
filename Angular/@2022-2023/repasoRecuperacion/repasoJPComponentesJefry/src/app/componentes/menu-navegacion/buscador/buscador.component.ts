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

  lista:any[] = []

  constructor(private bd:BdService) {}

  getCategorias() {
    this.lista.push(this.bd.getCategorias())
    return this.bd.getCategorias()
  }
/*
  getFabricantes():Array<any> {
    return this.bd.getFabricantes()
  }

  getArticulos():Array<any> {

    return this.bd.getArticulos()

    // let arts = this.bd.getArticulos()

    // if (this.filtroCat == 0 && this.filtroFab == 0) return arts
    // else {
    //   if (this.filtroCat == 0) return arts.filter( a => a.fab == this.filtroFab )
    //   else if (this.filtroFab == 0) return arts.filter( a => a.cat == this.filtroCat )
    //   else return arts
    //                 .filter( a => a.cat == this.filtroCat )
    //                 .filter( a => a.fab == this.filtroFab )
    // }
  }
*/


}
