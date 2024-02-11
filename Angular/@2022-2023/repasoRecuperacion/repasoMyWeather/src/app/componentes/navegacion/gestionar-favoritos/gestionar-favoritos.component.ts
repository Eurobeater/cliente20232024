import { Component, OnInit } from '@angular/core';
import { FavoritosService} from 'src/app/servicios/favoritos.service';

@Component({
  selector: 'app-gestionar-favoritos',
  templateUrl: './gestionar-favoritos.component.html',
  styleUrls: ['./gestionar-favoritos.component.css']
})
export class GestionarFavoritosComponent implements OnInit{
  
  constructor (private fav:FavoritosService) {}


  getFavs():any[] {
    return this.fav.getFavs()
  }
  
  setCiudadHome(city:any) {
    this.fav.setCiudadHome(city)
  }
  
  ngOnInit() {
    
  }
}
