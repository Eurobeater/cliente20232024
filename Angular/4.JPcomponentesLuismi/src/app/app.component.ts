import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CabeceraComponent, NavBarComponent, PieComponent],
  templateUrl: './app.component.html',
  styles: ``
})
export class AppComponent {
  title = '4.jpComponentes';
}
