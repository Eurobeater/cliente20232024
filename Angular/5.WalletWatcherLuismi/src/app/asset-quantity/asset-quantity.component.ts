import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asset-quantity',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './asset-quantity.component.html',
  styles: ``
})
export class AssetQuantityComponent {
  @Input() asset:any
}
