import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private url = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/"

  private categorias:Array<any> = []
  private fabricantes:Array<any> = []
  private articulos:Array<any> = []

  constructor( private http:HttpClient) { 
    http.get(this.url + "categorias").subscribe(
      (datos:any) => {
        this.categorias = datos
      }
    )

    http.get(this.url + "fabricantes").subscribe(
      (datos:any) => {
        this.fabricantes = datos
      }
    )

    http.get(this.url + "articulos").subscribe(
      (datos:any) => {
        this.articulos = datos
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
