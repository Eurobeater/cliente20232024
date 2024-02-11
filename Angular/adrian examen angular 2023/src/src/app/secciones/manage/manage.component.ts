import { Component, OnInit } from '@angular/core';
import { FavService } from '../../fav.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {


  constructor(private fav:FavService) { }



  getFavs():any[] {
    return this.fav.getFavs()
  }

  setCiudadHome(city:any) {
    this.fav.setCiudadHome(city)
  }

  ngOnInit() {
  }

}





