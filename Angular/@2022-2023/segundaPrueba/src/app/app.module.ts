import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { CommonModule } from '@angular/common';
import { QuintoComponent } from './quinto/quinto.component';
import { SextoComponent } from './sexto/sexto.component';
import { SextoDosComponent } from './sexto-dos/sexto-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    QuintoComponent,
    SextoComponent,
    SextoDosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent, PrimeroComponent, SegundoComponent, TerceroComponent, CuartoComponent, QuintoComponent, SextoComponent, SextoDosComponent]
})
export class AppModule { }
