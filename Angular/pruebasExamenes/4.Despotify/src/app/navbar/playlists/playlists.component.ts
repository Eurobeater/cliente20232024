import { Component } from '@angular/core';
import { PlaylistBloqueComponent } from './playlist-bloque/playlist-bloque.component';
import { BdService } from '../../bd.service';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [PlaylistBloqueComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})
export class PlaylistsComponent {

  constructor(private bd:BdService) {}

  getPlaylists() {
    return this.bd.getPlaylists()
  }

}
