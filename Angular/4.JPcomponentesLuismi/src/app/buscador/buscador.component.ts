import { Component, inject } from '@angular/core';
import { BdArticulosService } from '../bd-articulos.service';
import { ArticuloComponent } from '../articulo/articulo.component';
import { PatronPipe } from '../pipes/patron.pipe';
import { FiltroFabPipe } from '../pipes/filtro-fab.pipe';
import { FiltroCatPipe } from '../pipes/filtro-cat.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [ArticuloComponent, PatronPipe, FiltroFabPipe, FiltroCatPipe, FormsModule],
  templateUrl: './buscador.component.html',
  styles: ``
})
export class BuscadorComponent {
  private bd = inject(BdArticulosService)

  patron = ""
  cat = 0
  fab = 0

  borrarFiltros() {
    this.patron = ""
    this.cat = 0
    this.fab = 0
  }

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
