import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCineService {

  url:string = "https://www.omdbapi.com/"
  apikey:string = "&apikey=34adb0de"
  
  constructor(private http:HttpClient) {}

  buscarPelicula(pelicula:string){
    return this.http.get(`${this.url}?s=${pelicula}${this.apikey}`);
  }

  obtenerPelicula(id:string){
    return this.http.get(`${this.url}?i=${id}${this.apikey}`);
  }


}
