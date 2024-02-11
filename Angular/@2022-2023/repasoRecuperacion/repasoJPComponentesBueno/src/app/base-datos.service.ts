import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  private urlBase = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/"
  private categorias:Array<any> = []
  private fabricantes:Array<any> = []
  private articulos:Array<any> = []

  constructor(private http:HttpClient) {
    http.get(this.urlBase + "categorias").subscribe(
      (datos:any) => {
        this.categorias = datos
        //console.log(this.categorias)
      }
    )
    http.get(this.urlBase + "fabricantes").subscribe(
      (datos:any) => {
        this.fabricantes = datos
        //console.log(this.fabricantes)
      }
    )
    http.get(this.urlBase + "articulos").subscribe(
      (datos:any) => {
        this.articulos = datos
        //console.log(this.articulos)
      }
    )
  }

  getCategorias():Array<any> {
    return this.categorias
  }

  getFabricantes():Array<any> {
    return this.fabricantes
  }

  getArticulos():Array<any> {
    return this.articulos
  }
}
