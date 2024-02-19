import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CancionesComponent } from './canciones/canciones.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { BdService } from '../bd.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, InicioComponent, CancionesComponent, PlaylistsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
