import { Component, input } from '@angular/core';
import { Componente4Component } from '../componente4/componente4.component';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [Componente4Component],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component {
  arrayObjetos:Array<any> = [
    { name: "Juan", surname: " Alberto", age: 22 },
    { name: "Carlos", surname: "Perez", age: 40 },
    { name: "Paula", surname: "Fernández", age: 15 }
  ]

  constructor (private servicio:ServicioService) {}         //injeccion del servicio. se crea un constructor y se crea una variable llamada 'servicio' de tipo 'Servicio'

  getCiudades() {                                           //se crea una funcion, que retorna la variable 'servicio' de tipo 'Servicio' para listar el array de objetos de ciudades que hay en el servicio
    return this.servicio.getCiudadesServicio()
  }

  addCiudad(inputValue:string) {
    return this.servicio.addCiudad(inputValue)              //pasamos el valor del input a la funcion del servicio
  }

  remCiudad(index:number) {                                 //pasamos el indice del li a la funcion del servicio
    return this.servicio.remCiudad(index)
  }

}
