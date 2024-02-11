import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica Calculadora pildorasinformaticas';

  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;
}
