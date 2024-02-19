import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { PlaylistBloqueComponent } from './playlist-bloque/playlist-bloque.component';

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
