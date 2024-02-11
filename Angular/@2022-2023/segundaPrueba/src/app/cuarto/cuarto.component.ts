import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent {
  nombre = "";
  apellidos = "";
  
  mensaje = "";
  registrado = false;

  entradas:any;

  constructor() {
    this.entradas = [
      {titulo:"Python cada dia mas presente"},
      {titulo:"Java presente desde hace mas de 20 años"},
      {titulo:"Javascrip cada vez mas funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Donde quedo pascal?"}
    ]
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = "El usuario se ha registrado correctamente"
  }
}