import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private urlBase = "https://www.omdbapi.com/"
  private apiKey = "41f7251d"

  constructor(private http:HttpClient) {}

  buscarPeliculasPorPatron(patron:string) {
    return this.http.get(this.urlBase + "?s=" + patron + "&apikey=" + this.apiKey)
  }
}
