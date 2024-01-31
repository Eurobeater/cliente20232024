import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdArticulosService {
  private categorias:any = []
  private fabricantes:any = []
  private articulos:any = []

  private urlBase:string = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022"

  constructor(private http:HttpClient) {                              //en app.config.ts, donde pone [providers] escribir provideHttpClient()
    http.get(this.urlBase + "/categorias").subscribe( json => {
      this.categorias = json
    })
    http.get(this.urlBase + "/fabricantes").subscribe( json => {
      this.fabricantes = json
    })
    http.get(this.urlBase + "/articulos").subscribe( json => {
      this.articulos = json
    })
  }

  getCategorias() {return this.categorias}
  getFabricantes() {return this.fabricantes}
  getArticulos() {return this.articulos}

  getArticulosMasRecientes(numArticulos:number) {
    let articulosOrdenados = this.articulos.slice().sort( (a:any,b:any) => (a.id - b.id) )
    return articulosOrdenados.slice(-numArticulos)
  }
}
