import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  texto:string = "Hola mundo";
  numero:number = 5

  arrayNumerico:Array<number> = [1, 2, 3, 4, 5]
  arrayTextos:Array<string> = ["A", "B", "C", "D", "E"]

  arrayObjetos:Array<any> = [
    { name: "Juan", surname: " Alberto", age: 22 },
    { name: "Carlos", surname: "Perez", age: 40 },
    { name: "Paula", surname: "Fernández", age: 15 }
  ]

  getArrayObjetos() {
    return this.arrayObjetos
  }

  pasarNumero(numero:number) {
    return "El número es " +numero
  }
}
