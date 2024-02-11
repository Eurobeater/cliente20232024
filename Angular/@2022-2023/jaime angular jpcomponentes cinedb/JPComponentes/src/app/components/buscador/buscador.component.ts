import { Component } from '@angular/core';
import { BaseDatosArticulosService } from 'src/app/services/base-datos-articulos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  constructor(private artbd:BaseDatosArticulosService) { }

  getArticulos(){
    return this.artbd.getArticulos();
  }

  getCategorias(){
    return this.artbd.getCategorias();
  }

  getFabricantes(){
    return this.artbd.getFabricantes();
  }

  setFabricante(fabricante:string){
    this.artbd.setFabricante(fabricante);
  }

  setCategoria(categoria:string){
    this.artbd.setCategoria(categoria);
  }

  setNombre(nombre:string){
    this.artbd.setNombre(nombre);
  }

  getNombre(){
    return this.artbd.getNombre();
  }

  getCategoria(){
    return this.artbd.getCategoria();
  }

  getFabricante(){
    return this.artbd.getFabricante();
  }
}
