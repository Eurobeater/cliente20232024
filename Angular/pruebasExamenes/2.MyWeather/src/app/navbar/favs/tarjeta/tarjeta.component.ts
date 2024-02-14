import { Component, Input } from '@angular/core';
import { FavsService } from '../../../favs.service';
import { KelvinCelsiusPipe } from '../../../pipes/kelvin-celsius.pipe';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [KelvinCelsiusPipe],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() ciudadFav:any

  constructor (private favsService:FavsService) {}

  addDefault(ciudad:any) {
    return this.favsService.addDefault(ciudad)
  }

  delFav(ciudad:any) {
    return this.favsService.delFav(ciudad)
  }

  transformCelsius(ciudadFav:any) {
    let kelvinToCelsius = ciudadFav.main.temp - 273.15
    return kelvinToCelsius.toFixed(1)
  }

}
