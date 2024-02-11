import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit{
  
  @Input() ciudad:any

  constructor (private fav:FavoritosService) {}

  addFav(ciudad:string) {
    this.fav.addFav(ciudad)
  }

  delFav(ciudad:string) {
    this.fav.delFav(ciudad)
  }

  isFav(ciudad:string) {
    return this.fav.isFav(ciudad)
  }

  isHome(ciudad:string) {
    return this.fav.isHome(ciudad)
  }

  setCiudadHome(ciudad:any) {
    this.fav.setCiudadHome(ciudad)
  }



  ngOnInit() {
    
  }
}

