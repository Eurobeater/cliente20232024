import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private bdTodo:any = [{"songs": [{"id": 1,"title": "Low","artist": "Lenny Kravitz","length": 318},{"id": 2,"title": "Evil","artist": "Interpol","length": 216},{"id": 3,"title": "Dublin in Ecstasy","artist": "Inhaler","length": 311},{"id": 4,"title": "Fly To You","artist": "Caroline Polachek","length": 245},{"id": 5,"title": "Road Trippin","artist": "Red Hot Chili Peppers","length": 205},{"id": 6,"title": "Learn to Fly","artist": "Foo Fighters","length": 235},{"id": 7,"title": "Walk","artist": "Foo Fighters","length": 256},{"id": 8,"title": "Wishlist","artist": "Pearl Jam","length": 207},{"id": 9,"title": "High and Dry","artist": "Radiohead","length": 257},{"id": 10,"title": "The Fixer","artist": "Pearl Jam","length": 178},{"id": 11,"title": "Got Some","artist": "Pearl Jam","length": 183},{"id": 12,"title": "Just Breathe","artist": "Pearl Jam","length": 216},{"id": 13,"title": "Mierda de filosofía","artist": "Robe","length": 286},{"id": 14,"title": "Un instante de luz","artist": "Robe","length": 634},{"id": 15,"title": "Después de la catarsis","artist": "Robe","length": 523},{"id": 16,"title": "Older","artist": "L.A.","length": 207},{"id": 17,"title": "Over And Over","artist": "L.A.","length": 200},{"id": 18,"title": "Birthday","artist": "Kings of Leon","length": 195},{"id": 19,"title": "No Money","artist": "Kings of Leon","length": 318},{"id": 20,"title": "Beach Side","artist": "Kings of Leon","length": 171},{"id": 21,"title": "The Immortals","artist": "Kings of Leon","length": 209},{"id": 22,"title": "The Face","artist": "Kings of Leon","length": 208},{"id": 23,"title": "Microphones And Medicines","artist": "L.A.","length": 247},{"id": 24,"title": "Always There, Karma","artist": "L.A.","length": 247},{"id": 25,"title": "River","artist": "Morgan","length": 244},{"id": 26,"title": "Alone","artist": "Morgan","length": 428},{"id": 27,"title": "The End","artist": "Kings of Leon","length": 264},{"id": 28,"title": "Pyro","artist": "Kings of Leon","length": 251},{"id": 29,"title": "Ayer salí","artist": "León Benavente","length": 316},{"id": 30,"title": "Ser Brigada","artist": "León Benavente","length": 303}],"playlists": [{"id": 1,"name": "Rock americano","author": "Luismi","songs": [5,6,7,8,10,11,12,18,19,20,21,22,27,28]},{"id": 2,"name": "Grupos españoles","author": "Luismi","songs": [13,14,15,16,17,23,24,25,26,29,30]},{"id": 3,"name": "One hit wonders","author": "Luismi","songs": [1,2,3,4]},{"id": 4,"name": "Empty","author": "Unknown","songs": []}]}]
  private canciones:any = []
  private playlists:any = []

  private url = "https://my-json-server.typicode.com/luismiguel-fernandez/documentos"

  constructor(private http:HttpClient) {
    http.get(this.url + "/songs").subscribe( json => {
      this.canciones = json
    })
    http.get(this.url + "/playlists").subscribe( json => {
      this.playlists = json
    })
  }

  getCanciones() {
    return this.canciones
  }

  addPlaylist(cancion:any) {
    let comprobador = this.isAlreadyInPlaylist(cancion)
    if (!comprobador) {
      this.playlists[3].songs.push(cancion.id)
    }
    console.log(comprobador)
    console.log(this.playlists[3].songs)
  }

  getPlaylists() {
    return this.playlists
  }

  isAlreadyInPlaylist(cancion:any) {
    return this.playlists[3].songs.find( (c:any) => c.id == cancion.id)
  }

}

