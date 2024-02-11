import { Component, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  
  constructor (private fav:FavoritosService) {}
  
  getCiudadHome() {
    return this.fav.getCiudadHome()
  }
  
  ngOnInit() {
    
  }
}
