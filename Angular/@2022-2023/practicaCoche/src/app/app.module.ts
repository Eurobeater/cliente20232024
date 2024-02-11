import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BdCarsService } from './bd-cars.service';
import { CarCardComponent } from './car-card/car-card.component';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BdCarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
