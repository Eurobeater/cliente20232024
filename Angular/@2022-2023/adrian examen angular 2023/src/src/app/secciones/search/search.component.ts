import { Component, OnInit } from '@angular/core';
import { BdTiempoService } from '../../bdTiempo.service';
import { FavService } from '../../fav.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private resultados:any


  constructor(private bd:BdTiempoService, private fav:FavService) { }

  buscarPorCiudad(ciudad:string) {
    if (ciudad.trim().length) {
      this.bd.getCiudadesPorPatron(ciudad).subscribe(
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

  addFav(ciudad:string){

      this.fav.addFav(ciudad)


  }

  incluyeFav(id:number,) {
    return this.fav.incluyeFav(id)
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
