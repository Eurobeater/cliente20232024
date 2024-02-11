import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent {
private autor:string="Antonio";
getAutor():string {
   return this.autor;
}

constructor() {}

}
