import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'quienesSomos',
    component: SobreNosotrosComponent,
    title: 'Quiénes somos',
  },
  {
    path: '**',
    component: Page404Component,
    title: 'Error 404',
  }
];
