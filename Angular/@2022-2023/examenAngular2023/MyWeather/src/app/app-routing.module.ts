import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './navbar/secciones/error404/error404.component';
import { HomeComponent } from './navbar/secciones/home/home.component';
import { ManageComponent } from './navbar/secciones/manage/manage.component';
import { SearchComponent } from './navbar/secciones/search/search.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch : 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path: 'manage', component:ManageComponent},
  {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
