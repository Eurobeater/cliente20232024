import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FotoDelDiaComponent } from './foto-del-dia/foto-del-dia.component';
import { ListadoComponent } from './listado/listado.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FotoDelDiaComponent, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1.learning';
  private fecha = (new Date()).getDate() + " del " + ((new Date()).getMonth() + 1)

  getFecha() {
    return this.fecha
  }
}
