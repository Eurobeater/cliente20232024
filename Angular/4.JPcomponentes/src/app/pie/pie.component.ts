import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {

getAutor() {
  let autor = "Antonio"
  return autor
}

}
