import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseDatosArticulosService {

  private articulos:any[] = [];
  private categorias:any[] = [];
  private fabricantes:any[] = [];

  private fabricante:string = ""
  private categoria:string = ""
  private nombre:string = ""

  private url:string = 'https://my-json-server.typicode.com/martinginer9/JPComponentes'

  constructor(private http:HttpClient) { }

  setNombre(nombre:string){
    this.nombre = nombre;
  }

  getNombre(){
    return this.nombre;
  }

  setCategoria(categoria:string){
    this.categoria = categoria;
  }

  getCategoria(){
    return this.categoria;
  }

  setFabricante(fabricante:string){
    this.fabricante = fabricante;
  }

  getFabricante(){
    return this.fabricante;
  }

  getArticulos(){
    if(this.articulos.length === 0){
      this.http.get(`${this.url}/articulos`).subscribe((data:any) => {
        this.articulos = data;
      })
      return this.articulos;
    } else {
      return this.articulos;
    }
  }

  getCategorias(){
    if(this.categorias.length === 0){
      this.http.get(`${this.url}/categorias`).subscribe((data:any) => {
        this.categorias = data;
      })
      return this.categorias;
    } else {
      return this.categorias;
    }
  }

  getFabricantes(){
    if(this.fabricantes.length === 0){
      this.http.get(`${this.url}/fabricantes`).subscribe((data:any) => {
        this.fabricantes = data;
      })
      return this.fabricantes;
    } else {
      return this.fabricantes;
    }
  }
}
