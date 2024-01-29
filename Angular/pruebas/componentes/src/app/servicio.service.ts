import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  ciudades:Array<string> = ["Murcia", "Madrid", "Cádiz"]

  getCiudadesServicio() {         //esta funcion se podra llamar desde cualquier componente que importe el servicio
    return this.ciudades
  }

  addCiudad(inputValueComponente3:string) {
    this.ciudades.push(inputValueComponente3)
  }

  remCiudad(indexComponente3:number) {
    this.ciudades.splice(indexComponente3, 1)
  }

  constructor() { }
}
