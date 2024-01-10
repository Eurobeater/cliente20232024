import { Component } from '@angular/core';

@Component({
  selector: 'app-foto-del-dia',
  standalone: true,
  imports: [],
  templateUrl: './foto-del-dia.component.html',
  styleUrl: './foto-del-dia.component.css'
})
export class FotoDelDiaComponent {
  private fotos = ["../assets/img/gigachad1.png", "../assets/img/gigachad2.png", "../assets/img/gigachad3.png", "../assets/img/gigachad4.png"]

  getFotoAleatoria() {
    let posicion = Math.floor(Math.random() * this.fotos.length)
    return this.fotos[posicion]
  }
}
