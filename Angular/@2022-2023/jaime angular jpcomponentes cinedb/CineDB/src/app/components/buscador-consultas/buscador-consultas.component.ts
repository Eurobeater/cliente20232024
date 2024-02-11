import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDatosCineService } from 'src/app/services/base-datos-cine.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-buscador-consultas',
  templateUrl: './buscador-consultas.component.html',
  styleUrls: ['./buscador-consultas.component.css']
})
export class BuscadorConsultasComponent implements OnInit {

  private peliculas:any[] = [];
  constructor(private peliculasService:BaseDatosCineService,
              private _router:Router,
              private favService:FavoritosService) { }

  buscarPeli(pelicula:string){
    this.peliculasService.buscarPelicula(pelicula).subscribe((data:any) => {
      console.log(data);
      this.peliculas = data.Search;
    })
  }

  getPeliculas(){
    console.log(this.peliculas);
    return this.peliculas;
  }
  ngOnInit(): void {
    console.log("Componente cargado");
  }

  verDetalles(id:string){
    this.peliculasService.obtenerPelicula(id).subscribe((data:any) => {
      console.log(data);
      this.peliculas = data;
    })
  }

  addFav(pelicula:any){
    console.log(pelicula);
    this.favService.agregarFavorito(pelicula);
  }

  comprobarFav(id:string){
    console.log(id);
    return this.favService.comprobarFavorito(id);
  }
}
