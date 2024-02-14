import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  urlBase = "https://www.omdbapi.com/"
  apiKey = "41f7251d"

  constructor(private http:HttpClient) { }

  peliculas:any = []

  buscarPeliculasPorPatron(patron:string) {
    return this.http.get(this.urlBase + "?t=" + patron + "&apikey=" + this.apiKey)
  }

}
