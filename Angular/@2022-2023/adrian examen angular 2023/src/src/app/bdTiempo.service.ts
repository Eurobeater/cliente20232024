import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdTiempoService {
  private url = "http://api.openweathermap.org/data/2.5/"
	private apiKey = "5d2e9621c8c0dd861688f98e96de1889"
constructor(private http:HttpClient) { }

getCiudadesPorPatron(patron: string) {
  return this.http.get(this.url + "find?q=" + patron + "&appid=" + this.apiKey)
}

getTiempoCiudad(id: string | number) {
  return this.http.get(this.url + "weather?id=" + id + "&appid=" + this.apiKey + "&units=metric")
}


}
