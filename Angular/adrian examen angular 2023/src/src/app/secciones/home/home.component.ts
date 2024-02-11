import { Component, OnInit } from '@angular/core';
import { FavService } from '../../fav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fav:FavService) { }

  getCiudadHome() {
    return this.fav.getCiudadHome()
  }

  ngOnInit() {
  }

}
