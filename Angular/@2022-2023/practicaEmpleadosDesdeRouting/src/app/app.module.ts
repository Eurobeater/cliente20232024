import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';


const appRoutes:Routes = [
  {path:'', component:HomeComponent}, 
  {path:'quienes', component:QuienesSomosComponent}, 
  {path:'proyectos', component:ProyectosComponent}, 
  {path:'contacto', component:ContactoComponent}, 
  {path:'actualiza', component:ActualizaComponent}  //si le pongo actualiza/:id no carga, es un error que hay que solucionar
]


@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    QuienesSomosComponent,
    ProyectosComponent,
    ContactoComponent,
    ActualizaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService],
  bootstrap: [AppComponent, ComponenteHijoComponent, CaracteristicasEmpleadoComponent, HomeComponent, QuienesSomosComponent, ProyectosComponent, ContactoComponent, ActualizaComponent]
})
export class AppModule { }
