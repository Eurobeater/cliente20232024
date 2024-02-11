import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDatosCineService } from 'src/app/services/base-datos-cine.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  pelicula:any = [
  ];
  constructor(private peliculaService:BaseDatosCineService,
              private activatedRoute:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    if(this.pelicula.length == 0){
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.peliculaService.obtenerPelicula(params['id']).subscribe((data:any) => {
        console.log(data);
        this.pelicula = data;
      })
    })
  }
  }
  volverFav(){
    this._router.navigate(['/favs']);
  }
}

