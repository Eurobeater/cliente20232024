import { Component, Input } from '@angular/core';
import { FavsService } from '../../../../favs.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  peliculaDetalles: any;

  constructor(private favs:FavsService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {                                                      //si no se pone la condicion de si el id es distinto de null, da error la línea 22
        this.peliculaDetalles = this.favs.getPeliculaDetalles(id);
      }
    });
  }
}
