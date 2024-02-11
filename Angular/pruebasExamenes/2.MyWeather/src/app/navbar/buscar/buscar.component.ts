import { Component } from '@angular/core';
import { BdService } from '../../bd.service';
import { FormsModule } from '@angular/forms';
import { PatronPipe } from '../../pipes/patron.pipe';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormsModule, PatronPipe],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  constructor (private bd:BdService) { }

  private resultados:any

  patron = ""


}
