import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private url:string = "https://api.openweathermap.org/data/2.5/";
  private apiKey:string = "28ad8111640206dd8fd8c96578e64ee8"

  constructor(private http:HttpClient) { }

  getCiudadesPatron(patron:string) {
    return this.http.get(this.url + "find?q=" + patron + "&appid=" + this.apiKey)
  }

  getTiempoCiudad(id:string | number) {
    return this.http.get(this.url + "weather?id=" + id + "&appid=" + this.apiKey + "&units=metric")
  }

  getUrl() {
    return this.url
  }

  getApiKey() {
    return this.apiKey
  }

}
