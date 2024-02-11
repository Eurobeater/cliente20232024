import { Component } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent {
  onOff = true
  interruptor() {
    if (this.onOff) {
      this.onOff = false
    }else {
      this.onOff = true
    }
  }
}
