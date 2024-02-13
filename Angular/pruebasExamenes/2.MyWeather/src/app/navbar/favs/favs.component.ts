import { Component } from '@angular/core';
import { FavsService } from '../../favs.service';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';
import { PatronPipe } from '../../pipes/patron.pipe';
import { PatronFavsPipe } from '../../pipes/patron-favs.pipe';

@Component({
  selector: 'app-favs',
  standalone: true,
  imports: [TarjetaComponent, FormsModule, PatronFavsPipe],
  templateUrl: './favs.component.html',
  styleUrl: './favs.component.css'
})
export class FavsComponent {

  constructor(private favsService:FavsService) {}

  patron = ""

  getFavs() {
    return this.favsService.getFavs()
  }
}
