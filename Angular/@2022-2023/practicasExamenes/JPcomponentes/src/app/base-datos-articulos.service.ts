import { Injectable } from '@angular/core';
import { ConexionRemotaService } from './conexion-remota.service';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosArticulosService {

  constructor(private servicioConexion:ConexionRemotaService) { }


  
}
