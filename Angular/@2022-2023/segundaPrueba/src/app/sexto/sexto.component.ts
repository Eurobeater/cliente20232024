import { Component } from '@angular/core';

@Component({
  selector: 'app-sexto',
  templateUrl: './sexto.component.html',
  styleUrls: ['./sexto.component.css']
})
export class SextoComponent {


cosas:any [];

constructor() {
  this.cosas = [
    {elemento: "Elemento 1"},
    {elemento: "Elemento 2"},
    {elemento: "Elemento 3"},
    {elemento: "Elemento 4"},
    {elemento: "Elemento 5"}
  ] 
}

}
