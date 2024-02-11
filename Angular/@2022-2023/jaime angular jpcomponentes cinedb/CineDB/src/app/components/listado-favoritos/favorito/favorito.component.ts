import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit{

  @Input() favoritos:any = []

  constructor(private fav:FavoritosService,
              private _router:Router) { }

  borrarFav(id:string){
    this.fav.eliminarFavorito(id);
  }
            
  verDetalles(id:string){
    console.log(id);
    this._router.navigate(['/detail',id]);
  }

  ngOnInit() {
    console.log("Componente cargado");
    console.log(this.favoritos);
  }

}
