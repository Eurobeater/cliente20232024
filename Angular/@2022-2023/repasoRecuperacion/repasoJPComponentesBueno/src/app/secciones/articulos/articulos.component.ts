import { Component } from '@angular/core';
import { BaseDatosService } from 'src/app/base-datos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {
  filtroCat:number = 0
  filtroFab:number = 0
  filtroNom:string = ""

  constructor(private bd:BaseDatosService) {}

  getCategorias():Array<any> {
    return this.bd.getCategorias()
  }

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
}
