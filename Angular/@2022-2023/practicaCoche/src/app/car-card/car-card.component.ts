import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BdCarsService } from '../bd-cars.service';
import { Car } from '../cars-list/Car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() car:Car = new Car('onda', 'perseus', 90, 1, 'si')
  @Output() carBought = new EventEmitter<Car>()

  constructor(private bdCars:BdCarsService) { }

  ngOnInit(): void {
  }

  buyCar() {
    console.log("buyCar")
    this.carBought.emit(this.car)
  }

  eliminarCoche() {
    this.bdCars.removeCar(this.car)
  }
}
