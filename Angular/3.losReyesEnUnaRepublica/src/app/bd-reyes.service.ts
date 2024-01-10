import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdReyesService {
private reyesMagos = [
{id: 1, nombre: "Melchor", edad: 2100},
{id: 2, nombre: "Gaspar", edad: 2080},
{id: 3, nombre: "Baltasar", edad: 2070}
]
  constructor() { }

getReyesMagos() {
  return this.reyesMagos
}

getReyMago(i:number) {
  if (i >= 0 && i < this.reyesMagos.length) {
    return this.reyesMagos[i]
  }else {
    return
  }
}

getReyMagoPorId(id:number) {
  return this.reyesMagos.find(rey => rey.id == id)
}

}
