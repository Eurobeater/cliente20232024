import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/servicios/bd.service';
import { FavoritosService } from 'src/app/servicios/favoritos.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  private resultados:any

  constructor(private bd:BdService, private fav:FavoritosService) {}

  buscarCiudad(ciudad:string){
    if (ciudad.trim().length) {
      this.bd.getCiudadesPatron(ciudad).subscribe(
        json => {
          let response:any = json
          this.resultados = response.list
        }
      )
    }
  }

  getResultados() {
    return this.resultados
  }

  addFav(ciudad:string) {
    this.fav.addFav(ciudad)
  }

  incluyeFav(id:number) {
    return this.fav.incluyeFav(id)
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
