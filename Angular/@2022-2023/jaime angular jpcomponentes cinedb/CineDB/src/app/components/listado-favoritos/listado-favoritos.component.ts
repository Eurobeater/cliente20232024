import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-listado-favoritos',
  templateUrl: './listado-favoritos.component.html',
  styleUrls: ['./listado-favoritos.component.css']
})
export class ListadoFavoritosComponent {

   favoritos:any[] = [];

  constructor(private fav:FavoritosService,
              private _router:Router) { }

  getFavoritos(){
    this.favoritos = this.fav.obtenerFavoritos();
    return this.favoritos;
  }
}
