import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';

const routes: Routes = [
  {path: '', redirectTo: '/componente1', pathMatch: 'full' },
  {path:'componente1', component:PrimeroComponent},
  {path:'componente2', component:SegundoComponent},
  {path:'**', component:PrimeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
