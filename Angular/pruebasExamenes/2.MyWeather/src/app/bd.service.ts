import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private urlMyWeather:string = "http://api.openweathermap.org/data/2.5/"
  private apiKey:string = "29b6f6f2c313da3001c96e875995aed6"

  constructor(private http:HttpClient) {}                              //en app.config.ts, donde pone [providers] escribir provideHttpClient()

  getCiudadesPorPatron(patron:string) {
    return this.http.get(this.urlMyWeather + "find?q=" + patron + "&appid=" + this.apiKey)                  //realizar una solicitud http GET a la APi para buscar por patron. el subscribe() está en buscar.component.ts
  }

}
