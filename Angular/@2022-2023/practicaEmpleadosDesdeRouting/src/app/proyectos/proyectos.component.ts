import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

constructor(private router:Router, private miServicio:ServicioEmpleadosService) {}

volverHome() {
  this.router.navigate([''])
}

irAQuienes() {
  this.router.navigate(['quienes'])
}

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
  this.router.navigate([''])
}

}
