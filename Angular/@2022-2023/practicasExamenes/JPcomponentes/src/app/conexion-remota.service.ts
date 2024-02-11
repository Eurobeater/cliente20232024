import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionRemotaService {
  private categorias:any
  private fabricantes:any
  private productos:any
  private urlBaseExt:string = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/"

  constructor() { }
  
  getCategorias() {
    this.categorias = this.categorias
  }

  getFabricantes() {
    this.fabricantes = this.fabricantes
  }

  getProductos() {
    this.productos = this.productos
  }

  getUrlBaseExt() {
    this.urlBaseExt = this.urlBaseExt
  }


}
