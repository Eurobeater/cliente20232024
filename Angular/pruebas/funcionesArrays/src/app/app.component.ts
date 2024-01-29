import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputNombre = ""
  inputApellido = ""

  personas = ["Juan", "Sofia", "Alberto"]

  getPersonas() {
    return this.personas
  }

  guardarPersona() {
    this.personas.push(this.inputNombre)
  }

  borrarPersona(index:number) {
    this.personas.splice(index, 1)
  }

}
