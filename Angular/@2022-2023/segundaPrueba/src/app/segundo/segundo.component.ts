import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent {

titulo = ""
stringSi = "El usuario ha presionado 'Si'"
stringNo = "El usuario ha presionado 'No'"

funcionRadios(event:Event){
  if ((<HTMLInputElement>event.target).value == "si") {
    this.titulo = this.stringSi
  } else {
    this.titulo = this.stringNo
  }
}

textoEscrito = "Este texto valdrá igual que el input de abajo";

funcionInput(event:Event) {
  this.textoEscrito = (<HTMLInputElement>event.target).value
}
}