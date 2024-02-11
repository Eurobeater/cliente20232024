import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  private url:string = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022"

  private articulos:Array<any> = []
  private fabricantes:Array<any> = []
  private categorias:Array<any> = []

  constructor(private http:HttpClient) {
    //this.articulos = lo que me devuelva la llamada http
    this.http.get(this.url + "/articulos").subscribe((respuesta:any) => {
      this.articulos = respuesta
    })
    this.http.get(this.url + "/fabricantes").subscribe((respuesta:any) => {
      this.fabricantes = respuesta
    })
    this.http.get(this.url + "/categorias").subscribe((respuesta:any) => {
      this.categorias = respuesta
    })
  }

  getArticulos() {
    return this.articulos
  }

  getFabricantes() {
    return this.fabricantes
  }

  getCategorias() {
    return this.categorias
  }

}
