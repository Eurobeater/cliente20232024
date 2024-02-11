import { Component, Input, OnInit } from '@angular/core';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-ciudadTarjeta',
  templateUrl: './ciudadTarjeta.component.html',
  styleUrls: ['./ciudadTarjeta.component.css']
})
export class CiudadTarjetaComponent implements OnInit {
  @Input() ciudad:any

  constructor(private fav:FavService) { }

  addFav(ciudad:string){
    this.fav.addFav(ciudad)
  }

  delFav(ciudad:string){
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




