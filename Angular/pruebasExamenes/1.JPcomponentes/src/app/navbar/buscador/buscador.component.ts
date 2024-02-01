import { Component } from '@angular/core';
import { ArticuloComponent } from './articulo/articulo.component';
import { BdService } from '../../bd.service';
import { FiltroPatronPipe } from "../../pipes/patron.pipe";
import { FiltroFabPipe } from "../../pipes/filtro-fab.pipe";
import { FiltroCatPipe } from "../../pipes/filtro-cat.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-buscador',
    standalone: true,
    templateUrl: './buscador.component.html',
    styleUrl: './buscador.component.css',
    imports: [ArticuloComponent, FormsModule, FiltroPatronPipe, FiltroFabPipe, FiltroCatPipe]
})
export class BuscadorComponent {
  constructor(private bd:BdService){}

  patron = ""
  cat = 0
  fab = 0

  getArticulos() {
    return this.bd.getArticulos()
  }

  getCategorias() {
    return this.bd.getCategorias()
  }

  getFabricantes() {
    return this.bd.getFabricantes()
  }

  setCategoria(unaCategoria:string) {
    this.cat = parseInt(unaCategoria)
  }

  setFabricante(unFabricante:string) {
    this.fab = parseInt(unFabricante)
  }
}
