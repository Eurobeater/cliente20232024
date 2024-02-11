import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'practicaEmpleados';

  empleados:Empleado [] = [
    new Empleado("Juan", "Diaz", "Presidente", 7500), 
    new Empleado("Ana", "Martin", "Directora", 5500), 
    new Empleado("Maria", "Fernandez", "Jefa seccion", 3500),
    new Empleado("Laura", "Lopez", "Administrativo", 2500)
  ]

cuadroNombre:string = "";
cuadroApellidos:string = "";
cuadroCargo:string = "";
cuadroSalario:number = 0;

agregarEmpleado() {
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellidos, this.cuadroCargo, this.cuadroSalario);
  this.miServicio.muestraMensaje("Nombre del empleado: " +miEmpleado.nombre)
  this.empleados.push(miEmpleado)
}

constructor(private miServicio:ServicioEmpleadosService) {}

}
