import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdService } from '../../../bd.service';
import { FavoritosService } from 'src/app/favoritos.service';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  buscarCiudad: string = '';
  resultados: any[] = [];

  constructor(private http: HttpClient, @Inject(BdService) private bdService: BdService) {}

  buscar() {
    const url = this.bdService.getUrlApi().replace('murcia', this.buscarCiudad);
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.resultados = [data];
    });
  }

  guardarFavorita(resultado: any) {
    let favoritas = JSON.parse(localStorage.getItem('favoritas') || '[]');
    favoritas.push(resultado.name);
    localStorage.setItem('favoritas', JSON.stringify(favoritas));
  }


}
