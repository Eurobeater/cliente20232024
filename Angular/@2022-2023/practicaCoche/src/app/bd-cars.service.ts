import { Injectable } from '@angular/core';
import { Car } from './cars-list/Car';

@Injectable({
  providedIn: 'root'
})
export class BdCarsService {
  private cars:Car[]

  constructor() {
    if (localStorage.getItem("cars")) {
      this.cars = JSON.parse(localStorage.getItem("cars") ?? 'cars');
    } else {
      this.cars = new Array()
      this.populateCars()
      localStorage.setItem("cars", JSON.stringify(this.cars))
    }
  }

  enableStock() {
    this.cars.forEach(c => {
      if (c.stock == 0)
        c.stock = Math.floor(Math.random()*5)+1
    })
    this.saveCarsOnLocalStorage()
  }

  getCars() {
    return this.cars
  }

  populateCars() {
    this.cars = new Array()
    this.cars.push(new Car("Toyota","Auris",16900,4,"assets/img/auris.jpg"))
    this.cars.push(new Car("Ford","Mustang",35900,2,"assets/img/mustang.jpg"))
    this.cars.push(new Car("Tesla","Cybertruck",119900,0,"assets/img/cybertruck.jpg"))
    this.cars.push(new Car("Citroen","Berlingo",24900,5,"assets/img/Citroen_Berlingo.jpg"))
    this.cars.push(new Car("Kia","Niro",25400,3,"assets/img/Kia_Niro.jpg"))
    this.cars.push(new Car("Mercedes","Clase C",50225,4,"assets/img/Mercedes-C.jpg"))
    this.cars.push(new Car("Tesla","Model 3",45000,2,"assets/img/Tesla_Model3.jpg"))
    this.saveCarsOnLocalStorage()
  }


  reduceStock(car:Car) {
    //const miCoche = this.cars.find(coche => coche.id == id)
    if (car && car.stock) {
      car.stock--
      //además de modificar this.cars tenemos que guardar esos
      // cambios en el localStorage
      this.saveCarsOnLocalStorage()
    }
  }

  removeCar(car:Car) {
    let posicion = this.cars.indexOf(car)
    if (posicion != -1) {
      this.cars.splice(posicion,1)
      this.saveCarsOnLocalStorage()
    }
  }

  saveCarsOnLocalStorage() {
    localStorage.setItem("cars", JSON.stringify(this.cars) )
  }

}
