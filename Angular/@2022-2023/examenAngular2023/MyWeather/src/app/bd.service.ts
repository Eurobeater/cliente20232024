import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private urlApi:string = "https://api.openweathermap.org/data/2.5/weather?q=murcia&appid=28ad8111640206dd8fd8c96578e64ee8";

  constructor(private http:HttpClient) {}

  getUrlApi() {
    return this.urlApi;
  }
}
