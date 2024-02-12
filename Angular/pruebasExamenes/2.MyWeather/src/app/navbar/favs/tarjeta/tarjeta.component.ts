import { Component, Input } from '@angular/core';
import { FavsService } from '../../../favs.service';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() ciudadFav:any

  constructor (private favsService:FavsService) {}

  addDefault(ciudad:any) {
    return this.favsService.addDefault(ciudad)
  }

  delFav(index:number) {
    return this.favsService.delFav(index)
  }

}
