import { Component, inject } from '@angular/core';
import { BdService } from '../../bd.service';
import { PatronPipe } from '../../pipes/patron.pipe';
import { ArticuloComponent } from './articulo/articulo.component';
import { FiltroFabPipe } from '../../pipes/filtro-fab.pipe';
import { FiltroCatPipe } from '../../pipes/filtro-cat.pipe';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [ArticuloComponent, PatronPipe, FiltroFabPipe, FiltroCatPipe],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

private bd = inject(BdService)

articulosParaMostrar = this.getArticulos()        //guarda los productos del get (con o sin filtros, al principio sin filtros) en un array (este get retorna los productos del array del servicio)
patron = ""
cat = 0                                           //las categorias y fabricantes se les pone 0, porque en los arrays no hay 0 como categoria o fabricante
fab = 0

getArticulos() {
  return this.bd.getArticulos()         //retorna el getArticulos() del servicio
}

getFabricantes() {
  return this.bd.getFabricantes()         //retorna el getArticulos() del servicio
}

getCategorias() {
  return this.bd.getCategorias()         //retorna el getCategorias() del servicio
}

setCategoria(unaCategoria:string) {
  this.cat = parseInt(unaCategoria)
}

setFabricante(unFabricante:string) {          //este set se esta usando para los filtros por fabricante
  this.fab = parseInt(unFabricante)
}
}
