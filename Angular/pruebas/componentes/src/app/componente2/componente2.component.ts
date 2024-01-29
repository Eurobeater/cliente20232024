import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  habilitacionBoton = "true"
  empresa = "Google"

  mostrarAlert() {
    return alert("Presionaste el botón")
  }

  mostrarAlertParametro(texto:string) {
    return alert(texto)
  }
}
